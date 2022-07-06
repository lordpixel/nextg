import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRelationDetail, IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[relation-detail]',
  templateUrl: './relation-detail.component.html',
  styleUrls: ['./relation-detail.component.scss']
})
export class RelationDetailComponent implements OnInit {

  @HostBinding('class') className: string = 'closed';

  @Input() config!: IRelationDetail;

  @Input() recordID!: string;

  @Input() size!: number;

  private relationSub?: Subscription;

  constructor(private table: TableService) { }

  ngOnInit(): void {
    this.relationSub = this.table.relation$.subscribe(this.handleRelationStateChange.bind(this));
  }

  ngOnDestroy(): void {
    this?.relationSub?.unsubscribe();
  }

  handleRelationStateChange(relationState: IUnknownObject) {
    const isVisible = Boolean(relationState[this.recordID]);

    this.className = isVisible ? 'open' : 'closed';
  }
}
