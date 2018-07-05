import { BrowserModule }                                  from '@angular/platform-browser';
import { NgModule }                                       from '@angular/core';
import { BrowserAnimationsModule }                        from '@angular/platform-browser/animations';
import { FlexLayoutModule }                               from '@angular/flex-layout';
import { HttpClientModule, HttpClientXsrfModule }         from '@angular/common/http';

import { ReactiveFormsModule }                            from '@angular/forms';

import { MaterialModule }                                 from './material.module';
import { AppRoutingModule }                               from './app-routing/app-routing.module';
import { UICarouselModule  }                              from 'ng-carousel-iuno';


import { AppComponent }                                   from './app.component';
import { MenuComponent }                                  from './menu/menu.component';
import { TransactionsComponent }                          from './transactions/transactions.component';
import { InvoicesComponent }                              from './invoices/invoices.component';
import { InvoiceSummaryComponent }                        from './invoice-summary/invoice-summary.component';
import { ManageContractsComponent }                       from './manage-contracts/manage-contracts.component';
import { TransactionTreeComponent }                       from './transaction-tree/transaction-tree.component';
import { TransactionDetailsComponent } 					          from './transactions/transaction-details/transaction-details.component';
import { OpenContractsComponent }                         from './open-contracts/open-contracts.component';
import { AuthGuard }                                      from './_guards/auth.guard';
import { JwtInterceptor }                                 from './_helpers/jwt.interceptor';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { DashboardComponent }                             from './dashboard/dashboard.component';
import { LoginComponent }                                 from './login/login.component';
import { RegisterComponent }                              from './register/register.component';
import { AlertsComponent }                                from './alerts/alerts.component';

import { D3Service }                                      from 'd3-ng2-service';

import { fakeBackendProvider }                            from './_helpers/fake-backend';

import { ShowAuthedDirective }                            from './_shared/show-authed.directive';
import { FxPaymentsComponent }                            from './fx-payments/fx-payments.component';
import { FxViewPaymentsModalComponent }                   from './fx-payments/fx-view-payments-modal/fx-view-payments-modal.component';
import { FxMakePaymentsModalComponent }                   from './fx-payments/fx-make-payments-modal/fx-make-payments-modal.component';

import { DashboardCardsSpawnerComponent }                 from './dashboard/dashboard-cards-spawner/dashboard-cards-spawner.component';
import { DashboardUsersComponent }                        from './dashboard/dashboard-users/dashboard-users.component';
import { DashboardCardsService }                          from './_services/dashboard.service';
import { DashboardInvoicesReceivedComponent }             from './dashboard/dashboard-invoices-received/dashboard-invoices-received.component';
import { DashboardInvoicesSentComponent }                 from './dashboard/dashboard-invoices-sent/dashboard-invoices-sent.component';
import { DashboardOrdersReceivedComponent }               from './dashboard/dashboard-orders-received/dashboard-orders-received.component';
import { DashboardDeliveryNotesSentComponent }            from './dashboard/dashboard-delivery-notes-sent/dashboard-delivery-notes-sent.component';
import { DashboardRecentTransactionsComponent }           from './dashboard/dashboard-recent-transactions/dashboard-recent-transactions.component';
import { DashboardServiceOfferingsComponent }             from './dashboard/dashboard-service-offerings/dashboard-service-offerings.component';
import { DashboardAdvertisementTransportationComponent }  from './dashboard/dashboard-advertisement-transportation/dashboard-advertisement-transportation.component';
import { DashboardAdvertisementFinancialComponent }       from './dashboard/dashboard-advertisement-financial/dashboard-advertisement-financial.component';
import { DashboardChartComponent }                        from './dashboard/dashboard-chart/dashboard-chart.component';
import { DashboardPaymentCalendarChartComponent }         from './dashboard/dashboard-payment-calendar-chart/dashboard-payment-calendar-chart.component';
import { MenuListItemComponent }                          from './menu-list-item/menu-list-item.component';
import { MenuService }                                    from './_services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransactionsComponent,
    TransactionDetailsComponent,
    InvoicesComponent,
    InvoiceSummaryComponent,
    ManageContractsComponent,
    TransactionTreeComponent,
    OpenContractsComponent,
    LoginComponent,
    RegisterComponent,
    // DashboardComponent,
    AlertsComponent,
    ShowAuthedDirective,
    FxPaymentsComponent,
    FxViewPaymentsModalComponent,
    FxMakePaymentsModalComponent,
    DashboardComponent,
    DashboardCardsSpawnerComponent,
    DashboardUsersComponent,
    DashboardInvoicesReceivedComponent,
    DashboardInvoicesSentComponent,
    DashboardOrdersReceivedComponent,
    DashboardDeliveryNotesSentComponent,
    DashboardRecentTransactionsComponent,
    DashboardServiceOfferingsComponent,
    DashboardAdvertisementTransportationComponent,
    DashboardAdvertisementFinancialComponent,
    DashboardChartComponent,
    DashboardPaymentCalendarChartComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UICarouselModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrf-token',
      headerName: 'csrf-token'
    })
  ],
  exports: [
    ShowAuthedDirective
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    D3Service,
    UserService,
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
*/
    // provider used to create fake backend
  //  fakeBackendProvider,
    DashboardCardsService,
    MenuService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    InvoiceSummaryComponent,
    FxViewPaymentsModalComponent,
    FxMakePaymentsModalComponent
  ]
})
export class AppModule { }
