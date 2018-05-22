import { Component, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';
import { MatDialog }                  from '@angular/material';
import { FxPaymentsModalComponent }   from '../fx-payments-modal/fx-payments-modal.component';

@Component({
  selector: 'app-fx-payments',
  templateUrl: './fx-payments.component.html',
  styleUrls: ['./fx-payments.component.scss']
})
export class FxPaymentsComponent implements OnInit {

  displayedColumns = ['businessPartner', 'paymentDate', 'adviceDate', 'targetCurrency', 'localCurrency', 'status', 'action'];
  dataSource = ELEMENT_DATA;

  constructor( private _router: Router, public dialog: MatDialog ) { }


  ngOnInit() {
  }

  buttonClick( element: Element ): void {

    console.log('Clicking Button of Invoice');

    const dialogRef = this.dialog.open( FxPaymentsModalComponent, {
      // width: '250px',
      data: {
        businessPartner: element.businessPartner,
        paymentDate: element.paymentDate,
        adviceDate: element.adviceDate,
        amtInTargetCurrency: element.amtInTargetCurrency,
        targetCurrency: element.targetCurrency,
        amtInLocalCurrency: element.amtInLocalCurrency,
        localCurrency: element.localCurrency,
        status: element.status
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if ( result ) {
        this._router.navigate([ 'manageContracts' ]);
      }
    });
  }

}




export interface Element {
  businessPartner: string;
  paymentDate: string;
  adviceDate: string;
  amtInTargetCurrency: number;
  targetCurrency: string;
  amtInLocalCurrency: number;
  localCurrency: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [
  {businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
];
