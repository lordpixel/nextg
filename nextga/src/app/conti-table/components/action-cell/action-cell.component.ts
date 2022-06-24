import { Component, Input, OnInit} from '@angular/core';

import { ITableAction, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

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
   * The data that feeds the Table row these actions will be applied to */
  @Input() record!: IUnknownObject;


  constructor(private table: TableService) { }

  ngOnInit(): void {

  }

  handleActionClick(action: string) {
    this.table.action$.emit({action, record: this.record});
  }

}


