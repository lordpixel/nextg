import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, filter, pluck } from 'rxjs/operators';

import { IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../table-service';

/**
 * Query Token component
 * 
 * Renders a debounced input to update filter values. */
@Component({
  selector: 'filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: [ './filter-input.component.scss' ],
})
export class FilterInputComponent implements AfterViewInit {
  /**
   * A reference to the input DOM Element */
  @ViewChild('input', {static: true}) input: ElementRef | undefined;
  
  /**
   * Attribute
   * 
   * The text to display as column header */
   @Input() attribute: string = ''

  constructor(private table: TableService) {
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.handleInputEvent = this.handleInputEvent.bind(this);
  };

  /**
  * Stores the debounce subscription id for late use during cleanup */
  private debounceSub!: Subscription;

  /**
  * Stores the filter subscription id for late use during cleanup */
  private filterSub!: Subscription;

  public value: string = "";

  // we use this hook because we need the input to be already mounted in the DOM
  ngAfterViewInit() {
    this.debounceSub = fromEvent(this.input?.nativeElement, 'input') 
      // pipe allows us to use operators on every event
      .pipe(
        // ignore falsy values
        filter(Boolean),
        debounceTime(500), // debounce time
        // throttleTime(1500), //  throttle time 
        // do not fire until new content
        distinctUntilChanged(),
        // get the input value
        pluck('target', 'value'),
      )
      .subscribe(this.handleInputEvent);

    this.filterSub = this.table.filter$.subscribe(this.handleFilterUpdate);
  }

  handleInputEvent = (newValue: any) => {
    this.table.setFilters(this.attribute, newValue);
  }

  handleFilterUpdate = (filters: IUnknownObject) => {
    this.value = filters[this.attribute];
  }

  /**
   * Subscriptions are killed to revent memory leaks */
  OnDestroy() {
    this.debounceSub?.unsubscribe();
    this.filterSub?.unsubscribe();
  }
}