import { Component, Input, OnInit } from '@angular/core';

import { IProgressCell } from '../../conti-table.types';

@Component({
  selector: 'progress-cell',
  templateUrl: './progress-cell.component.html',
  styleUrls: ['./progress-cell.component.scss']
})
export class ProgressCellComponent implements OnInit {

  /**
   * Extra configuration object */
  @Input() config?: IProgressCell;

  /**
   * The current status of the toggle */
  @Input() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
