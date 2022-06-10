import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IPaginationState, ISortState, ITableColumn, IUnknownObject } from '../conti-table.types';

import { TableService } from '../table-service';

@Component({
  selector: 'app-conti-table',
  templateUrl: './conti-table.component.html',
  styleUrls: ['./conti-table.component.css'],
  providers: [TableService]
})
export class ContiTableComponent implements OnInit {

  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() columns: ITableColumn[] = [];

  /**
   * Data
   * 
   * A collection of records to render as rows */
  @Input() data: IUnknownObject[] = [];

  /**
   * Total count
   * 
   * The number of records returned by the query.
   * Note: this count is not the same as page_size. */
  @Input() totalCount: number = 0;

  /**
   * ID property
   * 
   * Specifies the property of Data that is unique among records.
   * This is used for selection purposes. Use a unique identifier. */
  @Input() idProperty!: string;

  /**
   * Initial filter
   * 
   * Use this to intialize Table with predefined filters */
  @Input() initialFilter: IUnknownObject = {};

  /**
   * Initial page
   * 
   * Use this to intialize Table with predefined sorting */
  @Input() initialPage: IPaginationState = {};

  /**
   * Initial selection
   * 
   * Use this to intialize Table with predefined selection */
  @Input() initialSelection: string[] = [];

  /**
   * Initial sort
   * 
   * Use this to intialize Table with predefined sorting */
  @Input() initialSort: ISortState[] = [];

  /**
   * onSelection()
   * 
   * An EventEmitter to handle selection updates. */
  @Output() onSelection = new EventEmitter<string>();

  /**
   * onUpdate()
   * 
   * An EventEmitter to handle filter updates.
   * This is the main mechanism to notify host component that filters have changed */
  @Output() onUpdate = new EventEmitter<string>();

  constructor(private state: TableService) { }

  ngOnInit(): void {
  }

}
