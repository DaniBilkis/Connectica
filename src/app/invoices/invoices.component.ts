import { Component, OnInit }        from '@angular/core';
import { InvoiceSummaryComponent }  from '../invoice-summary/invoice-summary.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router }                     from '@angular/router';
import { Invoice }                    from '../_shared/interface-invoice';
import { INVOICES }                   from '../_shared/data-invoices';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  displayedColumns = ['invoice', 'dueDate', 'invoiceValue', 'status'];
  dataSource = INVOICES;

  constructor( private _router: Router, public dialog: MatDialog ) { }

  ngOnInit() {
  }

  buttonClick( element: Invoice ): void {

    console.log('Clicking Button of Invoice');

    const dialogRef = this.dialog.open( InvoiceSummaryComponent, {
      // width: 'auto',
      panelClass: 'width-of-the-dialog',
      data: {
        invoice: element.invoice,
        buyerName: element.buyerName,
        dueDate: element.dueDate,
        invoiceValue: element.invoiceValue,
        advancePayment: element.advancePayment,
        totalBackPayment: element.totalBackPayment,
        feesAmount: element.feesAmount,
        feesDescription: element.feesDescription,
        advancedInstallment: element.advancedInstallment,
        advancedRate: element.advancedRate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if ( result ) {
        this._router.navigate([ 'manageContracts' ]);
      }
    });
  }
}

