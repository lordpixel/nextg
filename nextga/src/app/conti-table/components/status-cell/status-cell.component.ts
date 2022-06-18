import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IStatusCell } from '../../conti-table.types';

@Component({
  selector: 'status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss']
})
export class StatusCellComponent implements OnInit {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string | undefined = '';
  
  /**
   * Extra configuration object */
  @Input() config: IStatusCell = {size: 16};

  @Input() value?: string = 'unkown';

  constructor() { }

  ngOnInit(): void {
    this.className = this.value;
  }

}
