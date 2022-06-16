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
      sortAttribute: 'vehicle.approved',
      type: 'boolean',
    },
    {
      attribute: 'status',
      label: 'Status',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.status',
      type: 'status',
    },
    {
      attribute: 'objectId',
      label: 'ID',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.objectId',
      type: 'text',
    },
    {
      attribute: 'year',
      label: 'Year',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.year',
      type: 'text',
    },
    {
      attribute: 'make',
      label: 'Make',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.make',
      type: 'text',
    },
    {
      attribute: 'model',
      label: 'Model',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.model',
      type: 'text',
    },
    {
      attribute: 'createdAt',
      label: 'Created At',
      isFiltrable: false,
      isHidden: true,
      sortAttribute: 'createdAt',
      type: 'text',
    },
    {
      attribute: 'updatedAt',
      label: 'Updated At',
      isFiltrable: false,
      isSortable: true,
      isHidden: true,
      sortAttribute: 'updatedAt',
      type: 'text',
    }
  ];

  isLoading: boolean = false;
  selection: string[] = [];
  total: number = 0;
  
  constructor(private state: StateService) {
    this.state.cars$.subscribe(this.handleDataUpdate.bind(this));
  }

  ngOnInit(): void {
  }

  handleDataUpdate(endpointResponse: any) {
    this.data = endpointResponse.data;
    this.total = endpointResponse.total;
    this.isLoading = false;
  }

  handleQueryUpdate(query: string) {
    this.isLoading = true;
    this.data = [];
    this.state.fetchData.emit(query);
  }

  handleSelectionChange(newSelection: string[]) {
    this.selection = newSelection;
  }

}
