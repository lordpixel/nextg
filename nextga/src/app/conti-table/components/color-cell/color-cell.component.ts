import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss']
})
export class ColorCellComponent implements OnInit {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class') className: string = 'transparent';

  @Input() value: string = '';

  @Input() size: number = 16;

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.className = this.value;
  }

}
