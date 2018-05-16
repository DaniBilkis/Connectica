import { Routes }                       from '@angular/router';
import {TransactionsComponent}          from '../transactions/transactions.component';
import {InvoicesComponent}              from '../invoices/invoices.component';
import {ManageContractsComponent}       from '../manage-contracts/manage-contracts.component';
import {TransactionTreeComponent} from '../transaction-tree/transaction-tree.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
// import { MenuComponent }                from '../menu/menu.component';
// import { DishdetailComponent }          from '../dishdetail/dishdetail.component';
// import { HomeComponent }                from '../home/home.component';
// import { AboutComponent }               from '../about/about.component';
// import { ContactComponent }             from '../contact/contact.component';

export const routes: Routes = [
  { path: 'dashboard', component: TransactionTreeComponent },
  { path: 'manageContracts', component: ManageContractsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '',     redirectTo: 'index.html', pathMatch: 'full' }
];
