import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import {ICar, ICarEndpointResponse} from './app.types';

const baseURL: string = 'http://localhost:8080/cars';

/**
 * State service
 * 
 * Single source of truth for data coming from the Server. */
@Injectable({
  providedIn: 'root'
})
export class StateService {
  /**
   * Behavior Subject to keep track state */
   private readonly _cars = new BehaviorSubject<ICarEndpointResponse>({total: 0, data: [], status: 'loading'});

  /**
    * Behavior Subject as an Observable */
  readonly cars$ = this._cars.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  public fetchData: EventEmitter<string> = new EventEmitter(true);

  constructor(private http: HttpClient) {
    this.fetchData.pipe(
      distinctUntilChanged(),
      switchMap(
        (query: string) => this.http.get(`${baseURL}${query ? `?${query}` : ''}`)
      )
    ).subscribe(
      (response: any) => this._cars.next(response)
    );
  }
}
