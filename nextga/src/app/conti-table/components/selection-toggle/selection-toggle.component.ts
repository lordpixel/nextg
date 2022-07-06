import { Component, ElementRef, Input, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

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
   * recordsetIDs
   * 
   * Specifies if the checkbox controlsselection for all records in the collection*/
  @Input() recordsetIDs: string[] = [];

  /**
   * recordID
   * 
   * The ID of the record whose selection state is controlled by this toggle */
  @Input() recordID!: string;

  /**
   * Total number of records for the current query, including all pages */
  @Input() totalCount: number = 0;
  
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

  constructor(private table: TableService) {
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }
 
  ngOnInit(): void {
    this.selectionSub = this.table.selection$.subscribe(this.handleSelectionChange);
  }

  OnDestroy() {
    this?.selectionSub?.unsubscribe();
  }

  handleCheckboxClick() {
    if (this.isMaster) {
      this.table.toggleSelection(this.recordID, this.isMaster, this.recordsetIDs, this.totalCount);
    } else {
      this.table.toggleSelection(this.recordID, this.isMaster);
    }
  }

  handleSelectionChange(selection: string[]) {
    const checkbox = this.checkbox?.nativeElement;

    if (this.isMaster) {
      const selectedIDs = this.recordsetIDs.filter((id) => selection.includes(id));

      if (this.totalCount < 1 || selection.length === 0) {
        this.isChecked = false;
        checkbox.indeterminate = false;
        return;
      }

      if (selection.length >= 1) {
        if (selection.length < this.totalCount) {
          this.isChecked = false;
          checkbox.indeterminate = true;
        } else {
          this.isChecked = true;
          checkbox.indeterminate = false;
        }
      }
    
      return;
    }

    this.isChecked = selection.includes(this.recordID);
  }
}
