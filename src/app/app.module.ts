import { BrowserModule }                                  from '@angular/platform-browser';
import { NgModule }                                       from '@angular/core';
import { BrowserAnimationsModule }                        from '@angular/platform-browser/animations';
import { FlexLayoutModule }                               from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS }            from '@angular/common/http';

import { ReactiveFormsModule }                            from '@angular/forms';

import { MaterialModule }                                 from './material.module';
import { AppRoutingModule }                               from './app-routing/app-routing.module';


import { AppComponent }                                   from './app.component';
import { MenuComponent }                                  from './menu/menu.component';
import { TransactionsComponent }                          from './transactions/transactions.component';
import { InvoicesComponent }                              from './invoices/invoices.component';
import { InvoiceSummaryComponent }                        from './invoice-summary/invoice-summary.component';
import { ManageContractsComponent }                       from './manage-contracts/manage-contracts.component';
import { TransactionTreeComponent }                       from './transaction-tree/transaction-tree.component';
import { AuthGuard }                                      from './_guards/auth.guard';
import { JwtInterceptor }                                 from './_helpers/jwt.interceptor';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { DashboardComponent }                             from './dashboard/dashboard.component';
import { LoginComponent }                                 from './login/login.component';
import { RegisterComponent }                              from './register/register.component';
import { AlertsComponent }                                from './alerts/alerts.component';

import { D3Service }                                      from 'd3-ng2-service';

import { fakeBackendProvider }                            from './_helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransactionsComponent,
    InvoicesComponent,
    InvoiceSummaryComponent,
    ManageContractsComponent,
    TransactionTreeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    D3Service,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceSummaryComponent]
})
export class AppModule { }
