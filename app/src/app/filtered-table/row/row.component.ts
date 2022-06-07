import { Component, Input, OnInit } from '@angular/core';

import { ICar, IUnknowObject } from 'src/app/app.types';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() record: IUnknowObject = {};

  constructor() { }

  ngOnInit(): void {
  }

}
