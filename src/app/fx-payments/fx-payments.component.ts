import { Component, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';
import { MatDialog }                  from '@angular/material';
import { FxViewPaymentsModalComponent }   from '../fx-view-payments-modal/fx-view-payments-modal.component';
import { FxMakePaymentsModalComponent } from '../fx-make-payments-modal/fx-make-payments-modal.component';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-fx-payments',
  templateUrl: './fx-payments.component.html',
  styleUrls: ['./fx-payments.component.scss']
})
export class FxPaymentsComponent implements OnInit {

  displayedColumns = ['businessPartner', 'paymentDate', 'adviceDate', 'targetCurrency', 'localCurrency', 'status', 'action'];
  dataSource = ELEMENT_DATA;



  constructor( private fb: FormBuilder, private _router: Router, public dialog: MatDialog ) {

  }


  ngOnInit() {

  }



  buttonClick( element: Element ): void {

    console.log('Clicking View of FX Payment');

    const dialogRef = this.dialog.open( FxViewPaymentsModalComponent, {
      data: {
        paymentId: element.paymentId,
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


  newPayment(): void {

    console.log('Clicking Make New Payment');

    const dialogRef = this.dialog.open( FxMakePaymentsModalComponent, {
      data: {
        currencyTypes: [ 'EUR', 'USD', 'ISL', 'RUB' ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      /*
      if ( result ) {
        this._router.navigate([ 'manageContracts' ]);
      }
      */
    });
  }
}




export interface Element {
  paymentId: string,
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
  {paymentId: '123-456-789Z', businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {paymentId: '123-456-789Z', businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {paymentId: '123-456-789Z', businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {paymentId: '123-456-789Z', businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
  {paymentId: '123-456-789Z', businessPartner: 'Rewe Zentralfinanz eG', paymentDate: '2017-10-16T17:57:28.556094Z', adviceDate: '2017-10-16T17:57:28.556094Z', amtInTargetCurrency: 14236.45, targetCurrency: 'USD', amtInLocalCurrency: 13249, localCurrency: 'EUR', status: 'Open' },
];
