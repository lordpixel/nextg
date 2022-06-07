import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Subscription} from 'rxjs';

import {Column} from "./query-builder.types";
import { QueryBuilderService } from './query-builder.service';

/**
 * Query Builder component
 * 
 * Renders a header and input for every column passed. */
@Component({
  selector: 'query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css'],
  providers: [
    QueryBuilderService
  ]
})
export class QueryBuilderComponent implements AfterViewInit {
  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() columns: Column[] = [];

  /**
   * onUpdate()
   * 
   * An EventEmitter to handle filter updates.
   * This is the main mechanism to notify host component that filters have changed */
  @Output() onUpdate = new EventEmitter<string>();

  /**
   * queryUpdateSub
   * 
   * Internal variable to keep the subscription until component is destroyed.
   * This subscription handle will be used when unsibscribing. */
  private queryUpdateSub: Subscription | undefined;

  constructor(public filterService: QueryBuilderService) {}
  
  ngAfterViewInit() {
    // subscribe to query$ events
    this.queryUpdateSub = this.filterService.query$.subscribe(this.handleQueryUpdate);
  }

  handleQueryUpdate = (query: string) => {
    // notify host component that filters have changed
    this.onUpdate.emit(query);
  }

  /**
   * Subscription is killed to revent memory leaks */
   OnDestroy() {
    this.queryUpdateSub?.unsubscribe();
  }
}
