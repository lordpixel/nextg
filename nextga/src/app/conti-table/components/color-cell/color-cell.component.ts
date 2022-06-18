import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { IColorCell } from '../../conti-table.types';

@Component({
  selector: 'color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss']
})
export class ColorCellComponent implements OnInit {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = 'transparent';
  
  /**
   * Extra configuration object */
  @Input() config: IColorCell = {size: 16};

  /**
   * The value obtained from the record */
  @Input() value: string = '';

  constructor() { }

  ngOnInit(): void {
    this.className = this.value;
  }

}
