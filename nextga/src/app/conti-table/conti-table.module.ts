import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableService } from './services/table-service';

import { ContiTableComponent } from './components/table/conti-table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableRowComponent } from './components/table-row/table-row.component';

import { SelectionToggleComponent } from './components/selection-toggle/selection-toggle.component';
import { RowCellComponent } from './components/row-cell/row-cell.component';

import { SortInputComponent } from './components/sort-input/sort-input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ColorCellComponent } from './components/color-cell/color-cell.component';
import { StatusCellComponent } from './components/status-cell/status-cell.component';
import { IconComponent } from './components/icon/icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LinkCellComponent } from './components/link-cell/link-cell.component';
import { ActionCellComponent } from './components/action-cell/action-cell.component';
import { ToggleCellComponent } from './components/toggle-cell/toggle-cell.component';

@NgModule({
  declarations: [
    ContiTableComponent,
    TableHeaderComponent,
    FilterInputComponent,
    TableBodyComponent,
    TableRowComponent,
    SelectionToggleComponent,
    RowCellComponent,
    SortInputComponent,
    PaginationComponent,
    ColorCellComponent,
    IconComponent,
    LoadingComponent,
    StatusCellComponent,
    LinkCellComponent,
    ActionCellComponent,
    ToggleCellComponent
  ],
  exports: [
    ContiTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class ContiTableModule { }
