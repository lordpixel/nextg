import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[relation-cell]',
  templateUrl: './relation-cell.component.html',
  styleUrls: ['./relation-cell.component.scss']
})
export class RelationCellComponent implements OnInit, OnDestroy {

  @Input() recordID!: string;

  public isOpen: boolean = false;

  private relationSub?: Subscription;

  constructor(private table: TableService) { }

  ngOnInit(): void {
    this.relationSub = this.table.relation$.subscribe(this.handleRelationStateChange.bind(this));
  }

  ngOnDestroy(): void {
    this?.relationSub?.unsubscribe();
  }

  handleRelationStateChange(relationState: IUnknownObject) {
    this.isOpen = Boolean(relationState[this.recordID]);
  }

  handleToggleClick() {
    this.table.toggleRelation(this.recordID);
  }
}
