import { Routes }                         from '@angular/router';
import { TransactionsComponent }          from '../transactions/transactions.component';
import { InvoicesComponent }              from '../invoices/invoices.component';
import { ManageContractsComponent }       from '../manage-contracts/manage-contracts.component';
import { TransactionTreeComponent }       from '../transaction-tree/transaction-tree.component';
import { LoginComponent }                 from '../login/login.component';
import { RegisterComponent }              from '../register/register.component';
import { DashboardComponent }             from '../dashboard/dashboard.component';
import { AuthGuard }                      from '../_guards/auth.guard';
import { FxPaymentsComponent }            from '../fx-payments/fx-payments.component';
import { OpenContractsComponent }         from '../open-contracts/open-contracts.component';
import { MessagesComponent }              from '../messages/messages.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'messages', component: TransactionTreeComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'manageContracts', component: ManageContractsComponent, canActivate: [AuthGuard] },
  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: 'fx_payments', component: FxPaymentsComponent, canActivate: [AuthGuard] },
  { path: 'openContracts', component: OpenContractsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**',     redirectTo: 'dashboard', pathMatch: 'full' }
];
