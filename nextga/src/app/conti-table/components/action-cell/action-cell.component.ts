import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ITableAction, ITableActionEvent, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../table-service';

@Component({
  selector: '[action-cell]',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss']
})
export class ActionCellComponent implements OnInit {

  /**
   * A collection of action items that can be applied to 
   * each row separately */
  @Input() actions: ITableAction[] = [];

  /**
   * Name of the icon to display */
  @Input() icon!: string;

  /**
   * A name for the action.
   * 
   * It will be used as the first parameter of onAction event */
  @Input() name!: string;

  /**
   * Short text describing what the action does.
   * 
   * Title will be passed as attribute down to the svg icon */
  @Input() title!: string;

  /**
   * Short text describing what the action does.
   * 
   * Title will be passed as attribute down to the svg icon */
  @Input() record!: IUnknownObject;


  constructor(private table: TableService) { }

  ngOnInit(): void {

  }

  handleActionClick(action: string) {
    console.log('action cell: ', {action, record: this.record});
    this.table.action$.emit({action, record: this.record});
  }

}


