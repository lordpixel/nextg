import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import {ICar} from './app.types';

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
   private readonly _cars = new BehaviorSubject<ICar[]>([]);

  /**
    * Behavior Subject as an Observable */
  readonly cars$ = this._cars.asObservable().pipe(
    shareReplay(1) // cache and share among subscribers
  );

  constructor(private http: HttpClient) { }

  /**
   * Invokes the Ednpoint to get data
   * 
   * @param query The query string to be included in the call */
  updateCars(query: string) {
    this.http.get(`http://localhost:8080/cars?${query}`).subscribe((response) => {
      this._cars.next(response as ICar[]);
    });
  }
}
