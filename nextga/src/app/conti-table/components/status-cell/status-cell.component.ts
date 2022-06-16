import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss']
})
export class StatusCellComponent implements OnInit {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = '';

  @Input() status: string = 'unkown';

  @Input() size: number = 16;

  constructor() { }

  ngOnInit(): void {
    this.className = this.status;
  }

}
