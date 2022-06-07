import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryTokenComponent } from './query-token/query-token.component';
import { QueryBuilderComponent } from './query-builder.component';
import { QueryBuilderService } from './query-builder.service';

@NgModule({
  declarations: [
    QueryBuilderComponent,
    QueryTokenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QueryBuilderComponent
  ],
  providers: [
    QueryBuilderService
  ]
})
export class QueryBuilderModule { }
