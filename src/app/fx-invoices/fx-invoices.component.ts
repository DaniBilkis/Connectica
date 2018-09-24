import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule } from 'devextreme-angular';
import 'devextreme/data/odata/store';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable, fromEvent } from 'rxjs';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-fx-invoices',
  templateUrl: './fx-invoices.component.html',
  styleUrls: ['./fx-invoices.component.scss']
})
export class FxInvoicesComponent implements OnInit {

  dataSource: any;
  priority: any[];
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  invoices = new ExampleDatabase();
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  constructor() {
    this.dataSource = this.invoices.data;
    /*
    this.dataSource = {
      store: {
        type: "odata",
        url: "https://js.devexpress.com/Demos/DevAV/odata/Tasks"
      },
      expand: "ResponsibleEmployee",
      select: [
        "DIRECTION",
        "INVOICE",
        "INVOICE_DATE",
        "DUE_DATE",
        "INVOICE_VALUE",
        "CURRENCY",
        "HEDGE_NOW",
        "PAY_NOW"
      ]
    };
    */
    this.priority = [
      { name: "High", value: 4 },
      { name: "Urgent", value: 3 },
      { name: "Normal", value: 2 },
      { name: "Low", value: 1 }
    ];

  }

  ngOnInit() {
  }

}

export interface InvoiceList {
  direction: string;
  invoice: string;
  invoiceDate: string;
  dueDate: string;
  invoiceValue: number;
  currency: string;
  hedgeNow: boolean;
  payNow: boolean;
}

/** Constants used to fill up our data base. */
const DIRECTIONS = ['Inbound', 'Outbound'];
const INVOICES = ['Lidl UK Rechnungsnr: 12345-789', 'Spedition Poland Rechnungsnr: 12345-2017-02145', 'Lidl UK Rechnungsnr: 12345-2017-12453', 'Lidl UK Rechnungsnr: 12345-2017-02145' ];
const INVOICE_DATES = [ '2017-02-02T17:57:28.556094Z', '2018-05-02T13:50:00.556094Z', '2019-03-02T17:57:28.556094Z' ];
const DUE_DATES = [ '2017-03-02T17:57:28.556094Z', '2018-06-02T13:50:00.556094Z', '2019-07-02T17:57:28.556094Z' ];
const INVOICE_VALUES = [ 3549.00, 1126000 ];
const CURRENCY = [ 'GBP', 'PLN' ];
const HEDGE_NOW = [ true, false ];
const PAY_NOW = [ true, false ];


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<InvoiceList[]> = new BehaviorSubject<InvoiceList[]>([]);
  get data(): InvoiceList[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addContract(); }
  }

  /** Adds a new user to the database. */
  addContract() {
    const copiedData = this.data.slice();
    copiedData.push( this.createNewInvoice() );
    this.dataChange.next( copiedData );
  }

  /** Builds and returns a new User. */
  private createNewInvoice() {
    // const partner =
    //   PARTNERS[Math.round(Math.random() * (PARTNERS.length - 1))] + ' ' +
    //   PARTNERS[Math.round(Math.random() * (PARTNERS.length - 1))].charAt(0) + '.';

    return {
      direction: DIRECTIONS[Math.round(Math.random() * (DIRECTIONS.length - 1))],
      invoice: INVOICES[Math.round(Math.random() * (INVOICES.length - 1))],
      invoiceDate: INVOICE_DATES[Math.round(Math.random() * (INVOICE_DATES.length - 1))],
      dueDate: DUE_DATES[Math.round(Math.random() * (DUE_DATES.length - 1))],
      invoiceValue: INVOICE_VALUES[Math.round(Math.random() * (INVOICE_VALUES.length - 1))],
      currency: CURRENCY[Math.round(Math.random() * (CURRENCY.length - 1))],
      hedgeNow: HEDGE_NOW[Math.round(Math.random() * (HEDGE_NOW.length - 1))],
      payNow: PAY_NOW[Math.round(Math.random() * (PAY_NOW.length - 1))]
    };
  }
}
