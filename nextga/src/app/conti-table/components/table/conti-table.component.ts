import { Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPaginationState, ISortState, ITableAction, ITableActionEvent, ITableColumn, ITableLabels, ITableServiceState, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[conti-table]',
  templateUrl: './conti-table.component.html',
  styleUrls: ['./conti-table.component.scss'],
  providers: [TableService]
})
export class ContiTableComponent implements OnInit, OnChanges, OnDestroy {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = "conti-table";

/**
 * A collection of action items that can be applied to 
 * each row separately */
@Input() actions: ITableAction[] = [];

/**
 * Columns
 * 
 * A list of objects describing each column */
@Input() columns: ITableColumn[] = [];

/**
 * Data
 * 
 * A collection of records to render as rows */
@Input() data: IUnknownObject[] = [];

/**
 * ID property
 * 
 * Specifies the property of Data that is unique among records.
 * This is used for selection purposes. Use a unique identifier. */
@Input() idProperty!: string;

/**
 * Initial filter
 * 
 * Use this to intialize Table with predefined filters */
@Input() initialFilter: IUnknownObject = {};

/**
 * Initial page
 * 
 * Use this to intialize Table with predefined sorting */
@Input() initialPage: IPaginationState = { page: 1, page_size: 10 };

/**
 * Initial selection
 * 
 * Use this to intialize Table with predefined selection */
@Input() initialSelection: string[] = [];

/**
 * Initial sort
 * 
 * Use this to intialize Table with predefined sorting */
@Input() initialSort: ISortState = {};

/**
 * Is selectable
 * 
 * Specifies if the table allows record selection */
@Input() isSelectable: boolean = false;

/**
 * Specifies if a request is in progress, it displays the loading... leyend */
@Input() isLoading: boolean = false;

/**
 * labels */
@Input() labels: ITableLabels = {
  loading: 'Cargando...',
  displaying: 'Mostrando',
  of: 'de',
  no: 'Sin',
  page: 'Página',
  page_size: 'Limite',
  no_data: 'Sin Datos',
  in_selection: 'selected'
};

/**
 * The model name in singular mode */
@Input() modelSingular: string = 'Record';

/**
 * The model name in plural mode */
@Input() modelPlural: string = 'Records';

/**
 * Total count
 * 
 * The number of records returned by the query.
 * Note: this count is not the same as page_size. */
@Input() total: number = 0;

/**
 * onSelection()
 * 
 * An EventEmitter to handle selection updates. */
@Output() onAction = new EventEmitter<ITableActionEvent>();

/**
 * onSelection()
 * 
 * An EventEmitter to handle selection updates. */
@Output() onSelection = new EventEmitter<string[]>();

/**
 * onQueryUpdate()
 * 
 * An EventEmitter to handle filter updates.
 * This is the main mechanism to notify host component that filters have changed */
@Output() onQueryUpdate = new EventEmitter<string>();

  private querySub ?: Subscription;

  private selectionSub ?: Subscription;

  private actionSub ?: Subscription;

  public selectionStatus: string = '';

constructor(private table: TableService) {
  this.querySub = this.table.query$.subscribe(this.handleQueryUpdate.bind(this));
  this.selectionSub = this.table.selection$.subscribe(this.handleSelectionChange.bind(this));
}

ngOnInit(): void {
  // create a Map of the records in data
  const dataMap = new Map(this.data.map((record) => ([record[this.idProperty], record])));
  debugger
  /**
   * sets default + initial states */
  this.table.hydrate({
    filters: { ...this.initialFilter },
    page: {
      ...this.initialPage,
    },
    sort: this.initialSort,
    idProperty: this.idProperty,
    data: dataMap,
    totalCount: this.total
  });

  this.actionSub = this.table.action$.subscribe(this.handleOnAction.bind(this));
}

ngOnChanges(changes: SimpleChanges): void {
  const reHydratedState: ITableServiceState = {
    idProperty: this.idProperty
  };
  
  const newData = changes['data']?.currentValue;
  const oldData = changes['data']?.previousValue;
  
  const newTotal = changes['total']?.currentValue;
  const oldTotal = changes['total']?.previousValue;

  let newUpdates = false;

  if (newData && newData !== oldData) {
    reHydratedState.data = new Map(newData.map((record: IUnknownObject) => ([record[this.idProperty], record])));
    debugger
    newUpdates = true;
  }

  if (newTotal && newTotal !== oldTotal) {
    reHydratedState.totalCount = newTotal;
    newUpdates = true;
  }

  if (newUpdates) {
    this.table.hydrate(reHydratedState);
  }
}

ngOnDestroy(): void {
  this.querySub?.unsubscribe();
  this.selectionSub?.unsubscribe();
  this.actionSub?.unsubscribe();
}

handleQueryUpdate(newQuery: string) {
  this.onQueryUpdate.emit(newQuery);
}

handleSelectionChange(newSelection: Map<string, IUnknownObject>) {
  this.selectionStatus = `(${newSelection.size} ${this.labels.in_selection})`;

  const selectedIDs: string[] = [];
  newSelection.forEach((_: IUnknownObject, id: string) => selectedIDs.push(id));

  this.onSelection.emit(selectedIDs);
}

extractRecordsetIDs() {
  return this.data.reduce<string[]>((recordsetIDs: string[], record: IUnknownObject) => {
    recordsetIDs.push(record[this.idProperty]);

    return recordsetIDs;
  }, []);
}

handleOnAction(event: ITableActionEvent) {
  this.onAction.emit(event);
}

getVisibleColumns() {
  return this.columns.reduce<ITableColumn[]>((visibleColumns: ITableColumn[], column: ITableColumn) => {

    if (!column.isHidden) {
      visibleColumns.push(column);
    }

    return visibleColumns;
  }, []);
}
}
