import { EventEmitter, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {ESortOrder, IPaginationState, ISortState, ITableActionEvent, ITableServiceState, IUnknownObject} from '../conti-table.types';

@Injectable()
export class TableService {

  public idProperty: string = '';

  public readonly _totalCount = new BehaviorSubject<number>(0);

  /**
    * TBD */
  public readonly totalCount$ = this._totalCount.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  public readonly _data = new BehaviorSubject<Map<string, IUnknownObject>>(new Map());

  /**
    * TBD */
  public readonly data$ = this._data.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  public readonly _dataIDs = new BehaviorSubject<string[]>([]);

  /**
    * TBD */
  public readonly dataID$ = this._dataIDs.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

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
  * Behavior Subject for relations' state */
  private readonly _relation = new BehaviorSubject<IUnknownObject>({});
 
  /**
    * TBD */
  readonly relation$ = this._relation.asObservable().pipe(
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
  public readonly _selection: BehaviorSubject<Map<string, IUnknownObject>> =  new BehaviorSubject<Map<string, IUnknownObject>>(new Map());
 
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

    // this._selection.next([]);
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

    if (Object.entries(state?.filters || {}).length) {
      this._filter.next({}); // comment this to keep old filters
      Object.entries(state.filters || {}).forEach(
        ([attribute, value]) => this.setFilters(attribute, value, true)
      );
    }

    if (state?.page?.page || state?.page?.page === 0 && state.page.page_size) {
      this.setPage(state.page.page, state.page.page_size);
    }
    
    if (state?.sort?.sort_by && state?.sort.sort_order) {
      this._sort.next({});
      this.setSort(state?.sort.sort_by, state?.sort.sort_order);
    }

    if (state?.idProperty && state.idProperty !== this.idProperty) {
      this.idProperty = state.idProperty;
    }

    if (state?.data) {
      let dataIDs: string[] = [];

      state?.data?.forEach((record) => dataIDs.push(record[this.idProperty]));
      this._dataIDs.next(dataIDs);
      this._data.next(state.data);
    }

    if (state?.totalCount && state.totalCount >= 0) {
      this._totalCount.next(state.totalCount);
    }
  }

  toggleSelection(
    record: IUnknownObject,
    isMaster: boolean = false,
  ) {
    const oldSelectionState = this._selection.getValue();
    const data =  this._data.getValue();

    // the following logic runs only for main selection toggle
    if (isMaster) {
      // get current page' selected records
      let selectedIDs = new Map();
      data.forEach((record) => {
        const recordID = record[this.idProperty];
        
        if (oldSelectionState.has(recordID)) {
          selectedIDs.set(recordID, record);
        }
      });

      if (selectedIDs.size === data.size) {
        /**
         * All selectable ids are selected, next
         * action is to remove them all from selection */
        let newSelection = new Map();
        
        oldSelectionState.forEach((item: IUnknownObject) => {
          if (!data.has(item[this.idProperty])) {
            newSelection.set(item[this.idProperty], item);
          }
        });

        this._selection.next(newSelection);
      } else {
        /**
         * There still are some ids potentially selectable, next
         * action is to add them to selection */
        data.forEach((record) => {
          const recordID = record[this.idProperty];
          
          if (!oldSelectionState.has(recordID)) {
            oldSelectionState.set(recordID, record);
          }
        });
        
        this._selection.next(oldSelectionState);
      }

      return;
    }

    // further logic runs only for regular selection toggles, the ones we render for each row.

    // see if the record is selected
    const isSelected = oldSelectionState.has(record[this.idProperty]);

    if (isSelected) {
      oldSelectionState.delete(record[this.idProperty]);
    } else {
      oldSelectionState.set(record[this.idProperty], record);
    }

    // publish page state update
    this._selection.next(oldSelectionState);
  }

  toggleRelation(id: string) {
    const oldRelationState = this._relation.getValue();
    const isRelationOpen = Boolean(oldRelationState[id]);

    this._relation.next({
      ...oldRelationState,
      [id]: !isRelationOpen,
    })
  }

  toggleRelation(id: string) {
    const oldRelationState = this._relation.getValue();
    const isRelationOpen = Boolean(oldRelationState[id]);

    this._relation.next({
      ...oldRelationState,
      [id]: !isRelationOpen,
    })
  }
}
