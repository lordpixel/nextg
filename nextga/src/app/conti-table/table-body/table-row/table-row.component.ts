import { Component, Input, OnInit } from '@angular/core';

import { ITableColumn, IUnknownObject } from '../../conti-table.types';

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  /**
   * ID property
   * 
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
   @Input() idProperty!: string;

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

  constructor() { }

  ngOnInit(): void {
  }

}
