import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPaginationState } from '../conti-table.types';
import { TableService } from '../table-service';

@Component({
  selector: '[pagination]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @HostBinding('class.pagination') className: string = "pagination";

  page: number | undefined = 0;
  page_size: number | undefined = 10;

  private pageSub?: Subscription;

  constructor(private table: TableService) {
    this.pageSub = this.table.page$.subscribe(this.handlePageUpdate.bind(this));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this?.pageSub?.unsubscribe();
  }

  handlePageSizeSelect(event: any) {
    const incomingValue = event.target.value;
    const parsedSize = typeof incomingValue === 'number' ? incomingValue : parseInt(incomingValue);

    console.log('handlePageSizeSelect: ', parsedSize)
    this.generatePageUpdate(1, parsedSize);
  }

  handlePageSelect(event: any) {
    const incomingValue = event.target.value;
    const parsedPage = typeof incomingValue === 'number' ? incomingValue : parseInt(incomingValue);

    console.log('handlePageSelect', parsedPage)
    this.generatePageUpdate(parsedPage, this.page_size);
  }

  handlePageUpdate(page: IPaginationState) {
    this.page = page.page;
    this.page_size = page.page_size;
  }

  generatePageUpdate(page: number, size?: number) {
    let newPage: IPaginationState = {};

    // if page_size changes, reset to page 1
    if (page !== this.page) {
      newPage.page = page;
      newPage.page_size = this.page_size;
    } else if (size !== this.page_size) {
      newPage.page = 1;
      newPage.page_size = size;
    }

    this.table.setPage(newPage.page, newPage.page_size);
  }
}
