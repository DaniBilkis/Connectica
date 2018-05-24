import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-fx-payments-modal',
  templateUrl: './fx-payments-modal.component.html',
  styleUrls: ['./fx-payments-modal.component.scss']
})
export class FxPaymentsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FxPaymentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
