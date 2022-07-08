import { Component, Input, OnInit } from '@angular/core';

import { ITableColumn } from '../../conti-table.types';

@Component({
  selector: '[table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() columns: ITableColumn[] = [];

  /**
   * Specifies if actions were passed to the table,
   * if true, it will append an extra th at the end */
  @Input() hasActions: boolean = false;

  /**
   * Is selectable
   * 
   * Specifies if the table allows record selection */
  @Input() isSelectable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
