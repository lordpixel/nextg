import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUnknowObject } from 'src/app/app.types';

import { ITableColumn } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: '[table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit, OnDestroy {

  /**
   * Columns
   * 
   * A list of objects describing each column */
  @Input() columns: ITableColumn[] = [];

  /**
   * Specifies if actions were passed to the table,
   * if true, it will append an extra th at the end */
  @Input() hasActions: boolean = false;

  /**
   * Is selectable
   * 
   * Specifies if the table allows record selection */
  @Input() isSelectable: boolean = false;

  public hasRelation: boolean = false;
  public relationConfig: IUnknowObject = {};
  public relationStatus: string = 'more'; // more -> icon for closed relations
  public relationLabel: string = ''; // 

  relationSub?: Subscription;

  constructor(private table: TableService) {
    this.handleRelationChange = this.handleRelationChange.bind(this);
  }

  ngOnInit(): void {
    const relationColumn = this.columns.find((column) => column.type === 'relation');

    if (relationColumn) {
      this.hasRelation = true;
      this.relationSub = this.table.relation$.subscribe(this.handleRelationChange);
      this.relationConfig = relationColumn.config || {};
      this.relationLabel = relationColumn.label || '';
    }
  }

  ngOnDestroy(): void {
    this.relationSub?.unsubscribe();
  }

  handleRelationToggle() {
    const dataIDs = this.table._dataIDs.getValue();
    
    switch (this.relationStatus) {
      case 'relation-less':
        this.table._relation.next(dataIDs.reduce((relationState: IUnknowObject, id) => {
          relationState[id] = false;

          return relationState;
        }, {}));
        break;

      default: 
        this.table._relation.next(dataIDs.reduce((relationState: IUnknowObject, id) => {
          relationState[id] = true;

          return relationState;
        }, {}));
        break;
    }
  }

  handleRelationChange(relationState: IUnknowObject) {
    const dataIDs = this.table._dataIDs.getValue().length;
    const openRelationIDs = Object.values(relationState).filter((isOpen) => isOpen === true).length;

    if (openRelationIDs > 0 && openRelationIDs < dataIDs){
      this.relationStatus = 'sort-undefined';
    } else if (openRelationIDs > 0 && openRelationIDs === dataIDs){
      this.relationStatus = 'relation-less';
    } else {
      this.relationStatus = 'relation-more';
    }
  }

  getRenderableColumns() {
    return this.columns.filter((col) => col.type !== 'relation');
  }

}
