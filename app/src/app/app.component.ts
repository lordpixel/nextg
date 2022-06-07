import { Component, Input } from '@angular/core';

import { StateService } from './state.service';
import { ICar } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ICar[] = [];

  columns: {attribute: string, label: string, isFiltered: boolean}[] = [
    {
      attribute: 'objectId',
      label: 'ID',
      isFiltered: true
    },
    {
      attribute: 'year',
      label: 'Year',
      isFiltered: true
    },
    {
      attribute: 'make',
      label: 'Make',
      isFiltered: true
    },
    {
      attribute: 'model',
      label: 'Model',
      isFiltered: true
    },
    {
      attribute: 'createdAt',
      label: 'Created At',
      isFiltered: false
    },
    {
      attribute: 'updatedAt',
      label: 'Updated At',
      isFiltered: false
    }
  ];

  constructor(private state: StateService) {
    this.state.cars$.subscribe((newData) => this.data = newData);
  }

  handleFilterUpdate(query: string) {
    this.state.updateCars(query);
  }

}
