import { Component, Input, OnInit } from '@angular/core';

import { ILinkCell, IUnknownObject } from '../../conti-table.types';

@Component({
  selector: 'link-cell',
  templateUrl: './link-cell.component.html',
  styleUrls: ['./link-cell.component.scss']
})
export class LinkCellComponent implements OnInit {

  /**
   * Extra configuration object */
  @Input() config: ILinkCell = {};

  /**
   * The record from which link params will be extracted */
  @Input() record!: IUnknownObject;

  /**
   * A text/value to use as link text */
  @Input() value: string = 'no text defined';

  linkURL: string = '';

  constructor() { }

  ngOnInit(): void {
    const params = this?.config?.params || [];
    const isFragmentInRecord = this?.config?.fragment && this.record[this?.config?.fragment || ''];

    let withParams = params.reduce<string>(
      (linkURL, param) => {
        const paramValue = this.record[param];

        linkURL = linkURL.replace(`[${param}]`, paramValue);
        
        return linkURL;
      }, this?.config?.url || ''
    );

    if (isFragmentInRecord) {
      withParams = `${withParams}#${isFragmentInRecord}`;
    } else if (this.config.fragment) {
      withParams = `${withParams}#${this.config.fragment}`;
    }

    // param interpolation
    this.linkURL = withParams;
  }

}
