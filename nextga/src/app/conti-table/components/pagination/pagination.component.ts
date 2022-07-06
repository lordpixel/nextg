import { Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITableLabels, IPaginationState, ISelectOption } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

const defaultPageSizeOptions: ISelectOption[] = [
  {label: '10', value: 10}, 
  {label: '25', value: 25}, 
  {label: '50', value: 50}, 
  {label: '100', value: 100}
];

@Component({
  selector: '[pagination]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  /**
   * this binds the pagination css class to the host elem */
  @HostBinding('class.pagination') className: string = 'pagination';

  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() count: number = 0;

  /**
   * labels */
   @Input() labels!: ITableLabels;

  /**
   * The model name in singular mode */
  @Input() modelSingular: string = 'Record';

  /**
   * The model name in plural mode */
  @Input() modelPlural: string = 'Records';

  /**
   * The number of records returned by the query.
   * Note: this count is not the same as page_size. */
  @Input() total: number = 0;

  /**
   * A text describing the selection status */
  @Input() selectionStatus: string = '';
  
  page: number | undefined = 0;
  page_size: number = 10;
  pageOptions: ISelectOption[] = [{label: '1', value: 1}];
  pageSizeOptions: ISelectOption[] = defaultPageSizeOptions;  

  private pageSub?: Subscription;

  constructor(private table: TableService) {
    this.pageSub = this.table.page$.subscribe(this.handlePageUpdate.bind(this));
  }

  ngOnInit(): void {
    this.updatePaginationOptions();
  }
  
  ngOnChanges(simpleChanges: any): void {
    const {
      total: {
        previousValue = null,
        currentValue = null,
      } = {},
    } = simpleChanges;

    if (previousValue !== currentValue) {
      this.updatePaginationOptions();
    }
  }

  ngOnDestroy() {
    this?.pageSub?.unsubscribe();
  }

  handlePageSizeSelect(event: any) {
    const incomingValue = event.target.value;
    const parsedSize = typeof incomingValue === 'number' ? incomingValue : parseInt(incomingValue);

    this.generatePageUpdate(1, parsedSize);
  }

  handlePageSelect(event: any) {
    const incomingValue = event.target.value;
    const parsedPage = typeof incomingValue === 'number' ? incomingValue : parseInt(incomingValue);

    this.generatePageUpdate(parsedPage, this.page_size || 10);
  }

  handlePageUpdate(page: IPaginationState) {
    this.page = page.page;
    this.page_size = page.page_size;
    this.updatePaginationOptions();
  }

  generatePageUpdate(page: number, size: number) {
    let newPage: IPaginationState = {
      page: 1,
      page_size: 10,
    };

    // if page_size changes, reset to page 1
    if (page !== this.page) {
      newPage.page = page;

      if (size !== this.page_size) {
        newPage.page_size = size;
      } else {
        newPage.page_size = this.page_size;
      }
    } else if (size !== this.page_size) {
      newPage.page = 1;
      newPage.page_size = size;
    }

    this.table.setPage(newPage.page, newPage.page_size);
  }

  updatePaginationOptions() {

    if (this.total === 0) {
      this.pageOptions = [];
      this.pageSizeOptions = [];
      return;
    }

    if (this.total <= 10) {
      this.pageOptions = [{label: '1', value: 1}], 
      this.pageSizeOptions = [defaultPageSizeOptions[0]];
      return;
    }

    this.pageOptions = Array(Math.ceil(this.total / this.page_size || 10))
      .fill('')
      .map(
        (_, index) => ({
          label: `${index +1}`,
          value: index +1,
        })
      );

    // only show valid page sizes
    this.pageSizeOptions = defaultPageSizeOptions.filter((option) => option.value < this.total);
  }
}
