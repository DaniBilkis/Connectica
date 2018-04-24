import { Routes }                       from '@angular/router';
import {TransactionsComponent} from '../transactions/transactions.component';
// import { MenuComponent }                from '../menu/menu.component';
// import { DishdetailComponent }          from '../dishdetail/dishdetail.component';
// import { HomeComponent }                from '../home/home.component';
// import { AboutComponent }               from '../about/about.component';
// import { ContactComponent }             from '../contact/contact.component';

export const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'menu', component: MenuComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '',     redirectTo: 'index.html', pathMatch: 'full' }
];
