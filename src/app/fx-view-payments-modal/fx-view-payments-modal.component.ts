import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-fx-payments-modal',
  templateUrl: './fx-view-payments-modal.component.html',
  styleUrls: ['./fx-view-payments-modal.component.scss']
})
export class FxViewPaymentsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FxViewPaymentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
