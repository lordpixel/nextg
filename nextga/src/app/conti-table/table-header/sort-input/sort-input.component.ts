import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ESortOrder, ISortState } from '../../conti-table.types';
import { TableService } from '../../table-service';

@Component({
  selector: 'sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss']
})
export class SortInputComponent implements OnInit {

  @Input() attribute: string = '';

  isSorted: boolean = false;

  sort_order: ESortOrder.Ascending | ESortOrder.Descending | undefined;

  sortSub?: Subscription;

  constructor(private table: TableService) {
    this.handleSortUpdate = this.handleSortUpdate.bind(this);

    this.sortSub = this.table.sort$.subscribe(this.handleSortUpdate);
  }

  ngOnInit(): void {
  }

  handleSortUpdate(sort: ISortState) {
    if (this.attribute === sort.sort_by) {
      this.sort_order = sort.sort_order;
      this.isSorted = true;
    }
  }

  handleSortClick() {
    if(!this.sort_order) {
      this.sort_order = ESortOrder.Ascending;
      this.isSorted = true;
    } else if(this.sort_order === ESortOrder.Ascending) {
      this.sort_order = ESortOrder.Descending;
      this.isSorted = true;
    } else if (ESortOrder.Descending) {
      this.sort_order = undefined;
      this.isSorted = false;
    }

    this.table.setSort(this.isSorted ? this.attribute : '', this.sort_order);
  } 
}
