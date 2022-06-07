import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {IFilterUpdate} from './query-builder.types';

/**
 * Query Builder service
 * 
 * Keeps track of the current filters and their values and generates
 * a new query string on every update. */
@Injectable()
export class QueryBuilderService {
  /**
   * Behavior Subject to keep track of filters and their values */
  private readonly _filter = new BehaviorSubject<IFilterUpdate>({});

  /**
   * Behavior Subject for the query string */
  private readonly _query = new BehaviorSubject<string>("");

  /**
   * Filter Behavior subject as an Observable */
  readonly filter$ = this._filter.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  /**
   * Query Behavior subject as an Observable */
  readonly query$ = this._query.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  constructor() { }

  /**
   * Sets a new filter value to the specified attribute
   * @param attribute The attribute name
   * @param newFilterValue A new value for the filter */
  setFilter(attribute: string, newFilterValue: string) {
    const oldFilter = this._filter.getValue();

    let newFilter = {};
    let query = "";

    // merge old filters with incoming update
    newFilter = {
      ...oldFilter,
      [attribute]: newFilterValue,
    };

    // generate the new query string
    for (const [attribute, value] of Object.entries(newFilter)) {

      // skip if value is empty
      if (value !== "") {
        if (query === "") {
          query = `${attribute}=${value}`;
        } else {
          query = `${query}&${attribute}=${value}`;
        }
      }
    }

    // publish new values
    this._filter.next({...newFilter});
    this._query.next(query);
  }
}
