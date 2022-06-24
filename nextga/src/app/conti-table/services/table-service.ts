import { EventEmitter, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {ESortOrder, IPaginationState, ISortState, ITableActionEvent, ITableServiceState, IUnknownObject} from '../conti-table.types';

@Injectable()
export class TableService {

  /**
    * Behavior Subject to keep track of filters and their values */
  public readonly action$ = new EventEmitter<ITableActionEvent>();
 
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
  private readonly _page = new BehaviorSubject<IPaginationState>({page: 1, page_size: 10});
 
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
    if (page.page && page.page_size) {
      if (query === "") {
        query = `page=${page.page}&page_size=${page.page_size}`;
      } else {
        query = `${query}&page=${page.page}&page_size=${page.page_size}`;
      }
    }

    // sort
    if(sort.sort_by && sort.sort_order) {
      if (query === "") {
        query = `sort_by=${sort.sort_by}&sort_order=${sort.sort_order}`;
      } else {
        query = `${query}&sort_by=${sort.sort_by}&sort_order=${sort.sort_order}`;
      }
    }

    this._selection.next([]);
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

    // reset page to 1 (will save us a lot of bugs)
    const oldPage = this._page.getValue();
    this._page.next({
      ...oldPage,
      page: 1,
    });

    // publish filter state update
    this._filter.next(newFilterState);

    if (!skipQuery) {
      // generate and publush query string updaet
      const newQuery = this.generateQueryString();
      this._query.next(newQuery);
    }
  }

  setPage(page: number, page_size: number, skipQuery: boolean = false) {

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

  setSort(sort_by: string, sort_order: ESortOrder | undefined, skipQuery: boolean = false) {
    // publish page state update
    if (!sort_by || !sort_order) {
      this._sort.next({});
    } else {
      this._sort.next({
        sort_by,
        sort_order,
      });

      skipQuery = false;
    }

    if (!skipQuery) {
      // generate and publush query string updaet
      const newQuery = this.generateQueryString();
      this._query.next(newQuery);
    }
  }

  hydrate(state: ITableServiceState) {

    this._filter.next({});
    Object.entries(state.filters || {}).forEach(
      ([attribute, value]) => this.setFilters(attribute, value, true)
    );

    if (state.page.page || state.page.page === 0 && state.page.page_size) {
      this.setPage(state.page.page, state.page.page_size);
    }

    this._selection.next([]);
    state.selection.forEach((recordID) => this.toggleSelection(recordID));
    
    if (state.sort.sort_by && state.sort.sort_order) {
      this._sort.next({});
      this.setSort(state.sort.sort_by, state.sort.sort_order);
    }
  }

  toggleSelection(recordID: string, isMaster: boolean = false, allIDs: string[] = []) {
    const oldSelectionState = this._selection.getValue();

    // select/unselect all
    if (isMaster) {
      if (oldSelectionState.length < allIDs.length) {
        this._selection.next([...allIDs]);
      } else {
        this._selection.next([]);
      }

      return;
    }

    // see if the record is selected
    const isSelected = oldSelectionState.find((selectedID) => recordID === selectedID);

    let newSelectionState: string[];

    if (isSelected) {
      newSelectionState = oldSelectionState.reduce<string[]>((newSelection, selectedID) => {
        if (recordID !== selectedID) {
          newSelection.push(selectedID);
        }
  
        return newSelection;
      }, []);
    } else {
      newSelectionState = [...oldSelectionState, recordID];
    }

    // publish page state update
    this._selection.next(newSelectionState);
  }
}
