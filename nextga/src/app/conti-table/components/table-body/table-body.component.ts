import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {ITableAction, ITableColumn, IUnknownObject} from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit, OnDestroy {

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
   * Is selectable
   * 
   * Specifies if the table allows record selection */
  @Input() isSelectable: boolean = false;

  public data: IUnknownObject[] = [];
  dataSub?: Subscription;

  public relationAttribute: string = '';
  public hasRelation: boolean = false;
  public relationConfig: IUnknownObject = {};

  constructor(public table: TableService) {

  }

  ngOnInit(): void {
    this.dataSub = this.table.data$.subscribe(this.handleDataChange.bind(this));
    
    const relationColumn = this.columns.filter((column) => (column.type === 'relation')).shift();
    if (Boolean(relationColumn)) {
      this.relationAttribute = relationColumn?.attribute || '';
      this.relationConfig = relationColumn?.config || {};
      this.hasRelation = true;
    }
  }

  ngOnDestroy(): void {
    this?.dataSub?.unsubscribe();
  }

  handleDataChange(data: Map<string, IUnknownObject>) {
    const iterableData: IUnknownObject[] = [];

    data.forEach((record) => iterableData.push(record));
    this.data = iterableData;
  }

  getRecordID(record: IUnknownObject) {
    return record[this.table.idProperty];
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
