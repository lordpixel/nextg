import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss']
})
export class ColorCellComponent implements OnInit {

  @Input() color: string = '';

  @Input() value: string = '';

  @Input() size: number = 16;

  fill: string = 'fill:transparent';

  constructor() { }

  ngOnInit(): void {
    this.fill =  `fill:${this.color}`;
  }

}
