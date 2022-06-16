import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { IconComponent } from './components/icon/icon.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    LoadingComponent
  ],
  exports: [
    ContiTableComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class ContiTableModule { }
