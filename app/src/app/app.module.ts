import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { QueryBuilderModule } from './query-builder/query-builder.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilteredTableComponent } from './filtered-table/filtered-table.component';
import { RowComponent } from './filtered-table/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    FilteredTableComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    QueryBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
