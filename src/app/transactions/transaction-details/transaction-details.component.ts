import { Component, OnInit, Input } from '@angular/core';
import { TransactionDetails } from '../../_shared/transaction-details';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  @Input() transactionDetails: TransactionDetails;

  constructor() { }

  ngOnInit() {
  }

}
