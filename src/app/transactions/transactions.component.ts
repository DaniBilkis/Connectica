import { Component, OnInit }  from '@angular/core';
import { TransactionDetails } from '../_shared/transaction-details/transaction-details';
import { TRANSACTIONS }       from '../_shared/data-transactions';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public showSearch = false;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  selectedItem: TransactionDetails;

  transactions: TransactionDetails[];

  constructor() {
  }

  ngOnInit() {
    this.transactions = this.getTransactions();
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  getTransactions(): TransactionDetails[] {
    return TRANSACTIONS;
  }
  clickedItem(item: TransactionDetails): void {
    // console.log('Transaction Component. Clicked on ' + JSON.stringify(item));

    this.selectedItem = item;
// this._router.navigate([ 'search' ]);
// this.sharedService.searchFor( searchTerm );
  }

  onKeyUp( searchValue: any ) {

  }

}
