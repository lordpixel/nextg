import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableService } from './table-service';

import { ContiTableComponent } from './conti-table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { FilterInputComponent } from './table-header/filter-input/filter-input.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableRowComponent } from './table-body/table-row/table-row.component';

import { SelectionToggleComponent } from './selection-toggle/selection-toggle.component';
import { RowCellComponent } from './table-body/table-row/row-cell/row-cell.component';

import { SortInputComponent } from './table-header/sort-input/sort-input.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ColorCellComponent } from './components/color-cell/color-cell.component';
import { StatusCellComponent } from './components/status-cell/status-cell.component';
import { IconComponent } from './components/icon/icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LinkCellComponent } from './components/link-cell/link-cell.component';
import { ActionCellComponent } from './components/action-cell/action-cell.component';

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
    ActionCellComponent
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
