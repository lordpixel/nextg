import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  /**
   * Name
   * 
   * Name of icon to display */
   @Input() name!: string;

  /**
   * The content to display */
  @Input() size: number = 16;

  /**
   * Value
   * 
   * The content to display */
  @Input() value!: any;

  constructor() { }

  ngOnInit(): void {

  }

}


