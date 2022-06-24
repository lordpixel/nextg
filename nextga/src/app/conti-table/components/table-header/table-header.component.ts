import { Component, Input, OnInit } from '@angular/core';

import { ITableColumn } from '../../conti-table.types';
import { TableService } from '../../services/table-service';


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
  
  /**
   * Recordset IDs
   * 
   * A list of IDs present in the current recordset */
  @Input() recordsetIDs: string[] = [];

  constructor(private state: TableService) { }

  ngOnInit(): void {
  }

}
