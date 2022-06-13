import { Component, Input, OnInit } from '@angular/core';

import { StateService } from './state.service';
import { ICar } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data: ICar[] = [];

  contiColumns = [
    {
      attribute: 'approved',
      label: 'Approved',
      isFiltrable: true,
      isSortable: true,
      type: 'boolean',
    },
    {
      attribute: 'reliability',
      label: 'Reliability',
      isFiltrable: true,
      isSortable: true,
      type: 'icon',
    },
    {
      attribute: 'objectId',
      label: 'ID',
      isFiltrable: true,
      isSortable: true,
      type: 'text',
    },
    {
      attribute: 'year',
      label: 'Year',
      isFiltrable: true,
      isSortable: true,
      type: 'text',
    },
    {
      attribute: 'make',
      label: 'Make',
      isFiltrable: true,
      isSortable: true,
      type: 'text',
    },
    {
      attribute: 'model',
      label: 'Model',
      isFiltrable: true,
      isSortable: true,
      type: 'text',
    },
    {
      attribute: 'createdAt',
      label: 'Created At',
      isFiltrable: false,
      isHidden: true,
      type: 'text',
    },
    {
      attribute: 'updatedAt',
      label: 'Updated At',
      isFiltrable: false,
      isHidden: true,
      type: 'text',
    }
  ];

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

  selection: string[] = [];

  constructor(private state: StateService) {
    this.state.cars$.subscribe((newData) => this.data = newData);
  }

  ngOnInit(): void {
  }

  handleQueryUpdate(query: string) {
    this.state.updateCars(query);
  }

  handleSelectionChange(newSelection: string[]) {
    this.selection = newSelection;
  }

}
