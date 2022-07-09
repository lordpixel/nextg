import { Component, Input, OnInit } from '@angular/core';

import { StateService } from './state.service';
import { ICar } from './app.types';
import { ITableAction, ITableActionEvent, IUnknownObject } from './conti-table/conti-table.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  actions: ITableAction[] = [
    {
      icon: 'pencil',
      name: 'edit',
      title: 'Edit'
    },
    {
      icon: 'bucket',
      name: 'delete',
      title: 'Delete'
    }
  ];

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
      attribute: 'services',
      label: 'Services',
      type: 'relation',
      config: {
        actions: [
          {
            icon: 'filter',
            name: 'add.service',
            title: 'Add Service'
          }
        ],
        columns: [
          {
            attribute: 'id',
            label: 'ID',
          },
          {
            attribute: 'date',
            label: 'Date',
          },
          {
            attribute: 'emissions',
            label: 'Emissions',
          },
          {
            attribute: 'combustion',
            label: 'Combustion',
          },
          {
            attribute: 'exterior',
            label: 'Exterior',
          },
        ],
        labels: {
          no_data: 'No Services'
        },
        modelPlural: 'Services',
        modelSingular: 'Service',
        rowActions: [
          {
            icon: 'bucket',
            name: 'delete.service',
            title: 'Delete Service'
          },
        ],
        type: 'table',
      }
    },
    {
      config: {
        fragment: 'objectId',
        params: [
          'year',
          'make',
          'model',
        ],
        title: 'Click to see more about this Car',
        url: 'https://cars.io/[make]/[model]/[year]'
      },
      attribute: 'objectId',
      isFiltrable: false,
      isSortable: false,
      label: 'Visit',
      type: 'link',
    },
    {
      attribute: 'progress',
      config: {
        size: 3,
        title: 'Completed phases'
      },
      label: 'Progress',
      isFiltrable: true,
      isSortable: true,
      sortAttribute: 'vehicle.progress',
      type: 'progress',
    },
    {
      config: {
        name: 'approval',
        title: 'Click to approve / disapprove this Car',
      },
      attribute: 'approved',
      isFiltrable: false,
      isSortable: false,
      label: 'Approval',
      type: 'toggle',
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

  handleRowActionClick(event: ITableActionEvent) {
    console.log('host: ', event);
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
    console.log('selection: ', this.selection)
  }

}
