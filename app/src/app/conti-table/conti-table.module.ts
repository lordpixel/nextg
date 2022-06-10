import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContiTableComponent } from './conti-table/conti-table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableRowComponent } from './table-row/table-row.component';

import { TableService } from './table-service';

@NgModule({
  declarations: [
    ContiTableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableFooterComponent,
    TableRowComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TableService
  ]
})
export class ContiTableModule { }
