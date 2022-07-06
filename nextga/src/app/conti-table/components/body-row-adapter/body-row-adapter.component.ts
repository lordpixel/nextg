import { Component, OnInit, Input } from '@angular/core';
import { ITableAction, ITableColumn, IUnknownObject } from '../../conti-table.types';

@Component({
  selector: 'body-row-adapter',
  templateUrl: './body-row-adapter.component.html',
  styleUrls: ['./body-row-adapter.component.scss']
})
export class BodyRowAdapterComponent implements OnInit {

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

  public relationConfig!: IUnknownObject;

  constructor() { }

  ngOnInit(): void {
    const relationColumn = this.columns.filter((column) => (column.type === 'relation')).shift();

    this.relationConfig = relationColumn?.config?.config || {};
    this.hasRelation = Boolean(relationColumn);
  }

}
