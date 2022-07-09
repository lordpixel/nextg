import { Component, ElementRef, Input, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { IUnknownObject } from '../../conti-table.types';
import { TableService } from '../../services/table-service';

@Component({
  selector: 'selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent implements OnInit {
  /**
   * A reference to the input DOM Element */
  @ViewChild('checkbox', {static: true}) checkbox?: ElementRef;

  /**
   * isMaster
   * 
   * Specifies if the checkbox controls selection for all records in the collection*/
  @Input() isMaster?: boolean = false;
  

  /**
   * The record which this toggle controls selection for */
  @Input() record!: IUnknownObject;
  
  /**
   * isChecked
   * 
   * Specifies if the checkbox is checked */
  isChecked: boolean = false;
  
  /**
   * selectionSub
   * 
   * Specifies if the checkbox is checked */
  selectionSub?: Subscription;

  isIndeterminate: boolean = false;

  constructor(public table: TableService) {
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }
 
  ngOnInit(): void {
    this.selectionSub = this.table.selection$.subscribe(this.handleSelectionChange);
  }

  OnDestroy() {
    this?.selectionSub?.unsubscribe();
  }

  handleCheckboxClick() {
    this.table.toggleSelection(this.isMaster ? {} : this.record, this.isMaster);
  }

  handleSelectionChange(selection: Map<string, IUnknownObject>) {
    const checkbox = this.checkbox?.nativeElement;
    const totalCount = this.table._totalCount.getValue();

    if (this.isMaster) {
      if (totalCount < 1 || selection.size === 0) {
        this.isChecked = false;
        checkbox.indeterminate = false;
        return;
      }

      if (selection.size >= 1) {
        if (selection.size < totalCount) {
          this.isChecked = false;
          checkbox.indeterminate = true;
        } else {
          this.isChecked = true;
          checkbox.indeterminate = false;
        }
      }
    
      return;
    }

    this.isChecked = selection.has(this.record[this.table.idProperty]);
  }
}
