import { Routes }                       from '@angular/router';
import {TransactionsComponent}          from '../transactions/transactions.component';
import {InvoicesComponent}              from '../invoices/invoices.component';
import {ManageContractsComponent}       from '../manage-contracts/manage-contracts.component';
import {TransactionTreeComponent}       from '../transaction-tree/transaction-tree.component';
import {LoginComponent}                 from '../login/login.component';
import {RegisterComponent}              from '../register/register.component';

import {DashboardComponent}             from '../dashboard/dashboard.component';
import { AuthGuard }                    from '../_guards/auth.guard';

import { OpenContractsComponent }                from '../open-contracts/open-contracts.component';

// import { MenuComponent }                from '../menu/menu.component';
// import { DishdetailComponent }          from '../dishdetail/dishdetail.component';
// import { HomeComponent }                from '../home/home.component';
// import { AboutComponent }               from '../about/about.component';
// import { ContactComponent }             from '../contact/contact.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: TransactionTreeComponent, canActivate: [AuthGuard] },
  { path: 'manageContracts', component: ManageContractsComponent, canActivate: [AuthGuard] },
  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'openContracts', component: OpenContractsComponent },
  { path: '',     redirectTo: 'index.html', pathMatch: 'full' }
];
