import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ITableAction, ITableColumn, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[relation-table]',
  templateUrl: './relation-table.component.html',
  styleUrls: ['./relation-table.component.scss']
})
export class RelationTableComponent implements OnInit, OnDestroy {
  /**
    * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = "embedded-table";

  /**
   * The attribute name in parent Record from which to pull the data from */
  @Input() attribute!: string;

  /**
   * A collection of general actionitems that appear at the top of the table */
  @Input() actions: ITableAction[] = [];

  /**
   * A collection of action items that can be applied to 
   * each row separately */
  @Input() rowActions: ITableAction[] = [];

  /**
   * A list of objects describing each column */
  @Input() columns: ITableColumn[] = [];

  /**
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
  @Input() idProperty!: string;

  /**
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
  @Input() modelPlural!: string;

  /**
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
  @Input() modelSingular!: string;

  /**
   * Text labels to allow i18n */
  @Input() labels: IUnknownObject = {
    no_data: 'No Data',
  }

  /**
   * the parent record id, it will later be used together with the attribute
   * to retrieve the data that feeds this table. */
  @Input() parentID!: string;

  public data: IUnknownObject[] = [];

  dataSub?: Subscription;

  constructor(private parentTable: TableService) { }

  ngOnInit(): void {
    this.dataSub = this.parentTable.data$.subscribe(this.handleParentDataUpdate.bind(this));
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe(); 
  }

  handleTableAction(action: ITableAction) {
    const records = this.parentTable._data.getValue();
    const thisRecord = records.get(this.parentID) || {};

    console.log(action)

    this.parentTable.action$.emit({
      action: action.name,
      record: thisRecord
    })
  }

  handleRowAction(action: ITableAction, relation: IUnknownObject) {
    const records = this.parentTable._data.getValue();
    const thisRecord = records.get(this.parentID) || {};

    console.log(action)

    this.parentTable.action$.emit({
      action: action.name,
      record: thisRecord,
      relation
    })
  }

  handleParentDataUpdate(parentData: Map<string, IUnknownObject>) {
    const parentRecord = parentData.get(this.parentID);

    this.data = parentRecord?.[this.attribute] || [];
  }
}
