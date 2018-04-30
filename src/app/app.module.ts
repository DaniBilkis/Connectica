import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { HttpClientModule }             from '@angular/common/http';

import { MaterialModule }               from './material.module';
import { AppRoutingModule }             from './app-routing/app-routing.module';


import { AppComponent }                 from './app.component';
import { MenuComponent }                from './menu/menu.component';
import { TransactionsComponent }        from './transactions/transactions.component';
import { InvoicesComponent }            from './invoices/invoices.component';
import { InvoiceSummaryComponent }      from './invoice-summary/invoice-summary.component';
import { ManageContractsComponent } from './manage-contracts/manage-contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransactionsComponent,
    InvoicesComponent,
    InvoiceSummaryComponent,
    ManageContractsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceSummaryComponent]
})
export class AppModule { }
