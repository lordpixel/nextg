import { Component, Input, OnInit } from '@angular/core';

import { ETableColumType, ITableColumn, IUnknownObject } from '../../../conti-table.types';

@Component({
  selector: '[row-cell]',
  templateUrl: './row-cell.component.html',
  styleUrls: ['./row-cell.component.scss']
})
export class RowCellComponent implements OnInit {

  /**
   * Value
   * 
   * The content to display */
  @Input() column!: ITableColumn;

  /**
   * The record from which link params will be extracted */
  @Input() record!: IUnknownObject;

  /**
   * Type
   * 
   * Type of column header */
  @Input() type: string = ETableColumType.Text;

  /**
   * Value
   * 
   * The content to display */
  @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
