import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, pluck } from 'rxjs/operators';

import { QueryBuilderService } from '../query-builder.service';

import { IFilterUpdate } from '../query-builder.types';

/**
 * Query Token component
 * 
 * Renders a debounced input to update filter values. */
@Component({
  selector: 'query-token',
  templateUrl: './query-token.component.html',
  styleUrls: [ './query-token.component.css' ],
})
export class QueryTokenComponent implements AfterViewInit {
  /**
   * A reference to the input DOM Element */
  @ViewChild('input', {static: true}) input: ElementRef | undefined;
  
  /**
   * Attribute
   * 
   * The text to display as column header */
   @Input() attribute: string = ''
   
  /**
   * Label
   * 
   * The text to display as column header */
   @Input() label: string = 'NO LABEL'
   
  /**
   * Filtered
   * 
   * Specifies if the column is filtered.
   * 
   * If false, the component will behave like a regular header,
   * it won't activate its debouced-input mechanism to save memory.*/
   @Input() isFiltered: boolean = false

  constructor(private queryService: QueryBuilderService) { };

  /**
  * Stores the debounce subscription id for late use during cleanup */
  private debounceSub!: Subscription;

  /**
  * Stores the filter subscription id for late use during cleanup */
  private filterSub!: Subscription;

  public value: string = "";

  // we use this hook because we need the input to be already mounted in the DOM
  ngAfterViewInit() {
    if (!this.isFiltered) {
      return;
    }
  
    this.debounceSub = fromEvent(this.input?.nativeElement, 'input') 
      // pipe allows us to use operators on every event
      .pipe(
        // ignore falsy values
        filter(Boolean),
        // 300 miliseconds debounce time
        debounceTime(300),
        // do not fire until new content
        distinctUntilChanged(),
        // get the input value
        pluck('target', 'value'),
      )
      .subscribe(this.handleInputEvent);

    this.filterSub = this.queryService.filter$.subscribe(this.handleFilterUpdate);
  }

  handleInputEvent = (newValue: any) => {
    this.queryService.setFilter(this.attribute, newValue);
  }

  handleFilterUpdate = (filters: IFilterUpdate) => {
    this.value = filters[this.attribute];
  }

  /**
   * Subscriptions are killed to revent memory leaks */
  OnDestroy() {
    this.debounceSub?.unsubscribe();
    this.filterSub?.unsubscribe();
  }
}