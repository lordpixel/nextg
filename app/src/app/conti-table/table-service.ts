import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {ESortDirection, IPaginationState, ISortState, ITableServiceState, IUnknownObject} from './conti-table.types';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  /**
    * Behavior Subject to keep track of filters and their values */
  private readonly _filter = new BehaviorSubject<IUnknownObject>({});
 
  /**
    * TBD */
  readonly filter$ = this._filter.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  /**
    * Behavior Subject for the query string */
  private readonly _query = new BehaviorSubject<string>("");
 
  /**
    * TBD */
  readonly query$ = this._query.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  /**
    * Behavior Subject for the query string */
  private readonly _page = new BehaviorSubject<IPaginationState>({page: 0, page_size: 100});
 
  /**
    * TBD */
  readonly page$ = this._page.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  /**
    * Behavior Subject for the query string */
  private readonly _sort = new BehaviorSubject<ISortState>({});
 
  /**
    * TBD */
  readonly sort$ = this._sort.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  /**
    * Behavior Subject for the query string */
  private readonly _selection = new BehaviorSubject<string[]>([]);
 
  /**
    * TBD */
  readonly selection$ = this._selection.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );
 
  constructor() { }

  generateQueryString(): string {

    // get current values
    const filters = this._filter.getValue();
    const page = this._page.getValue();
    const sort = this._sort.getValue();

    let query = '';

    // filters
    for (const [attribute, value] of Object.entries(filters)) {

      // skip if value is empty
      if (value !== "") {
        if (query === "") {
          query = `${attribute}=${value}`;
        } else {
          query = `${query}&${attribute}=${value}`;
        }
      }
    }

    // pagination
    if (query === "") {
      query = `page=${page.page}&page_size=${page.page_size}}`;
    } else {
      query = `${query}&page=${page.page}&page_size=${page.page_size}}`;
    }

    // sort
    if (query === "") {
      query = `sort_by=${sort.sort_by}&sort_order=${sort.sort_order}}`;
    } else {
      query = `${query}&sort_by=${sort.sort_by}&sort_order=${sort.sort_order}}`;
    }

    return query;
  }

  setFilters(attribute: string, newValue: string, skipQuery: boolean = false) {
    // get current value
    const oldFilterState = this._filter.getValue();

    let newFilterState = {};

    // merge old filters with incoming update
    newFilterState = {
      ...oldFilterState,
      [attribute]: newValue,
    };

    // publish filter state update
    this._filter.next(newFilterState);

    if (!skipQuery) {
      // generate and publush query string updaet
      const newQuery = this.generateQueryString();
      this._query.next(newQuery);
    }
  }

  setPage(page: number, page_size?: number, skipQuery: boolean = false) {

    // publish page state update
    this._page.next({
      page,
      page_size,
    });

    if (!skipQuery) {
      // generate and publush query string updaet
      const newQuery = this.generateQueryString();
      this._query.next(newQuery);
    }
  }

  setSort(sort_by: string, sort_order: ESortDirection, skipQuery: boolean = false) {
    // publish page state update
    this._sort.next({
        sort_by,
        sort_order,
      }
    );

    if (!skipQuery) {
      // generate and publush query string updaet
      const newQuery = this.generateQueryString();
      this._query.next(newQuery);
    }
  }

  hydrate(state: ITableServiceState) {
    const {
      filters = {},
      page = {},
      selection = [],
      sort = {},
    } = state;

    this._filter.next({});
    Object.entries(filters).forEach(
      ([attribute, value]) => this.setFilters(attribute, value, true)
    );

    if (page.page || page.page === 0 && page.page_size) {
      this.setPage(page.page, page.page_size);
    }

    this._selection.next([]);
    selection.forEach((recordID) => this.select(recordID));
    
    this._sort.next({});
    if (sort.sort_by && sort.sort_order) {
      this.setSort(sort.sort_by, sort.sort_order);
    }
  }

  select(recordID: string) {
    const oldSelectionState = this._selection.getValue();

    oldSelectionState.push(recordID);

    // publish page state update
    this._selection.next(oldSelectionState);
  }

  unselect(recordID: string) {
    const oldSelectionState = this._selection.getValue();
    const newSelectionState = oldSelectionState.reduce<string[]>((newSelection, selectedID) => {
      if (recordID !== selectedID) {
        newSelection.push(recordID);
      }

      return newSelection;
    }, [])

    // publish page state update
    this._selection.next(newSelectionState);
  }
}
