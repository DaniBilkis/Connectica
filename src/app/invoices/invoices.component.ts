import { Component, OnInit }        from '@angular/core';
import { InvoiceSummaryComponent }  from '../invoice-summary/invoice-summary.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  displayedColumns = ['invoice', 'dueDate', 'invoiceValue', 'status'];
  dataSource = ELEMENT_DATA;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }

  buttonClick( element: Element ): void {

    console.log('Clicking Button of Invoice');

    const dialogRef = this.dialog.open( InvoiceSummaryComponent, {
      // width: '250px',
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
      // this.animal = result;
    });
  }
}

export interface Element {
  invoice: string;
  buyerName: string;
  dueDate: string;
  invoiceValue: string;
  advancePayment: string;
  totalBackPayment: string;
  feesAmount: string;
  feesDescription: string;
  advancedInstallment: string;
  advancedRate: string;
  status: string;
  active: boolean;
}

const ELEMENT_DATA: Element[] = [
  {invoice: '12345-789-0781', buyerName: 'Rewe Zentralfinanz eG', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0782', buyerName: 'Ivanov', dueDate: '2018-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Finance now', active: true},
  {invoice: '12345-789-0783', buyerName: 'Petrov', dueDate: '2019-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,871', advancedRate: '75%', status: 'Finance now', active: true},
  {invoice: '12345-789-0784', buyerName: 'Sidorov', dueDate: '2022-10-13T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0785', buyerName: 'Molodec', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0786', buyerName: 'Pidar', dueDate: '2017-11-10T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0787', buyerName: 'Super Molodec', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Finance now', active: true},
  {invoice: '12345-789-0788', buyerName: 'Ahtung', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,871', advancedRate: '90%', status: 'Finance now', active: true},
  {invoice: '12345-789-0789', buyerName: 'Kaput', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0790', buyerName: 'Panzer Batalionen', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0791', buyerName: 'Naal Abuk', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false},
  {invoice: '12345-789-0792', buyerName: 'Kussammo', dueDate: '2017-10-16T17:57:28.556094Z', invoiceValue: '1,456,234', advancePayment: '1,456', totalBackPayment: '12,453', feesAmount: '365.12', feesDescription: '3% per 60 days', advancedInstallment: '1,619', advancedRate: '75%', status: 'Not financeable', active: false}
];
