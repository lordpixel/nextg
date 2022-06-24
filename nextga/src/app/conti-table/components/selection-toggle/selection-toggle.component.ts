import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TableService } from '../../services/table-service';

@Component({
  selector: 'selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent implements OnInit {

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
  @Input() recordID: string = '';
  
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
    this.selectionSub = table.selection$.subscribe(this.handleSelectionChange.bind(this));
  }
 
  ngOnInit(): void {}

  OnDestroy() {
    this?.selectionSub?.unsubscribe();
  }

  handleCheckboxClick() {
    console.log('handleCheckboxClick: ', this.recordID);

    if (this.isMaster) {
      this.table.toggleSelection(this.recordID, this.isMaster, this.recordsetIDs);
    } else {
      this.table.toggleSelection(this.recordID, this.isMaster);
    }
  }

  handleSelectionChange(selection: string[]) {
    const isRecordIdInSelection = selection.includes(this.recordID);
    
    if (this.isMaster) {
      this.isIndeterminate = selection.length > 0 && selection.length < this.recordsetIDs?.length;
      this.isChecked = selection.length === this.recordsetIDs.length;
      return; 
    }

    this.isChecked = isRecordIdInSelection;
  }

}
