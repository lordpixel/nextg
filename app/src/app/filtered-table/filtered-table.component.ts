import { Component, Input, OnInit } from '@angular/core';

import {Column} from "../query-builder/query-builder.types";
import {ICar} from '../app.types';

@Component({
  selector: 'filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.css']
})
export class FilteredTableComponent implements OnInit {
  @Input() columns: Column[] = [];

  @Input() data: ICar[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
