import { Component, Input, OnInit } from '@angular/core';

import { IRelationDetail, ITableAction, ITableColumn, IUnknownObject } from '../../conti-table.types';

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  /**
   * A collection of action items that can be applied to 
   * each row separately */
  @Input() actions: ITableAction[] = [];

  /**
   * isSelectable
   * 
   * Specifies if the record is selectable */
  @Input() isSelectable: boolean = false;

  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() columns: ITableColumn[] = [];
 
  /**
   * Data
   * 
   * A collection of records to render as rows */
  @Input() record!: IUnknownObject;

  /**
   * Data
   * 
   * A collection of records to render as rows */
   @Input() recordID!: string;

  public hasRelation: boolean = false;
  public renderableColumns: ITableColumn[] = [];

  constructor() {}

  ngOnInit(): void {
    const relationColumn = this.columns.filter((column) => (column.type === 'relation')).shift();
    const renderableColumns = this.columns.filter((column) => column.type !== 'relation');

    this.hasRelation = Boolean(relationColumn);
    this.renderableColumns = renderableColumns;
  }
}
