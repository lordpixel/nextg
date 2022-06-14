import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPaginationState, ISortState, ITableColumn, IUnknownObject } from './conti-table.types';
import { TableService } from './table-service';

@Component({
  selector: '[conti-table]',
  templateUrl: './conti-table.component.html',
  styleUrls: ['./conti-table.component.scss'],
  providers: [TableService]
})
export class ContiTableComponent implements OnInit, OnDestroy {
 
  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = "conti-table";

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
  @Input() initialPage: IPaginationState = {};

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
  @Output() onSelection = new EventEmitter<string[]>();

  /**
   * onQueryUpdate()
   * 
   * An EventEmitter to handle filter updates.
   * This is the main mechanism to notify host component that filters have changed */
  @Output() onQueryUpdate = new EventEmitter<string>();

  private querySub?: Subscription;

  private selectionSub?: Subscription;

  constructor(private table: TableService) {
    this.querySub = this.table.query$.subscribe(this.handleQueryUpdate.bind(this));
    this.selectionSub = this.table.selection$.subscribe(this.handleSelectionChange.bind(this));
  }

  ngOnInit(): void {

    /**
     * sets default + initial states */
    this.table.hydrate({
      filters: {...this.initialFilter},
      page: {
        page: 1,
        page_size: 100,
        ...this.initialPage,
      },
      sort: this.initialSort,
      selection: [...this.initialSelection],
    });
  }
  
  ngOnDestroy(): void {
    this.querySub?.unsubscribe();
    this.selectionSub?.unsubscribe();
  }

  handleQueryUpdate(newQuery: string) {
    this.onQueryUpdate.emit(newQuery);
  }

  handleSelectionChange(newSelection: string[]) {
    this.onSelection.emit(newSelection);
  }

  extractRecordsetIDs() {
    return this.data.reduce<string[]>((recordsetIDs: string[], record: IUnknownObject) => {
      recordsetIDs.push(record[this.idProperty]);

      return recordsetIDs;
    }, []);
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
