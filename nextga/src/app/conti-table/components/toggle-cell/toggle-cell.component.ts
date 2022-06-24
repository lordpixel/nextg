import { Component, Input, OnInit } from '@angular/core';

import { IToggleCell, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: 'toggle-cell',
  templateUrl: './toggle-cell.component.html',
  styleUrls: ['./toggle-cell.component.scss']
})
export class ToggleCellComponent implements OnInit {

  /**
   * Extra configuration object */
  @Input() config?: IToggleCell;

  /**
   * The record that will be passed to the onAction event */
  @Input() record!: IUnknownObject;

  /**
   * The current status of the toggle */
  @Input() value: boolean = false;

  constructor(private table: TableService) { }

  ngOnInit(): void {}

  handleToggleClick(event: MouseEvent) {
    this.table.action$.emit({action: this.config?.name || '', record: this.record});
  }
}
