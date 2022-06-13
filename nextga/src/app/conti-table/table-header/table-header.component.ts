import { Component, Input, OnInit } from '@angular/core';

import { ITableColumn } from '../conti-table.types';
import { TableService } from '../table-service';


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
