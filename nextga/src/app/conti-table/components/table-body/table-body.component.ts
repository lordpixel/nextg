import { Component, Input, OnInit } from '@angular/core';

import {ITableAction, ITableColumn, IUnknownObject} from '../../conti-table.types';

@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

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
   * Data
   * 
   * A collection of records to render as rows */
  @Input() data!: IUnknownObject[];

  /**
   * ID property
   * 
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
  @Input() idProperty!: string;

  /**
   * Is selectable
   * 
   * Specifies if the table allows record selection */
  @Input() isSelectable: boolean = false;

  ngOnInit(): void {
    
  }

  getVisibleColumns() {
    return this.columns.reduce<ITableColumn[]>((visibleColumns: ITableColumn[], column: ITableColumn) => {

      if (!column.isHidden) {
        visibleColumns.push(column);
      }
      

      return visibleColumns;
    }, []);

    return this.columns.filter((column) => column.isHidden)
  }

}
