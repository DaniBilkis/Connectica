import { Component, Inject, OnInit }      from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA }  from '@angular/material';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-fx-make-payments-modal',
  templateUrl: './fx-make-payments-modal.component.html',
  styleUrls: ['./fx-make-payments-modal.component.scss']
})
export class FxMakePaymentsModalComponent implements OnInit {

  makePaymentForm: FormGroup;
  amountFormControl: FormControl;
  dateFormControl: FormControl;
  nameFormControl: FormControl;
  iBANFormControl: FormControl;
  bicFormControl: FormControl;
  streetFormControl: FormControl;
  zipCodeFormControl: FormControl;
  cityFormControl: FormControl;
  countryFormControl: FormControl;
  currencyTypesFormControl: FormControl;
  matcher = new MyErrorStateMatcher();

  currencyTypes;
  /*= [ {key: 'solid',  value: 'Solid'},
{key: 'great',  value: 'Great'},
{key: 'good',   value: 'Good'},
{key: 'unproven', value: 'Unproven'} ];
*/
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FxMakePaymentsModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {

    this.createForm();
  }

  ngOnInit() {
    this.currencyTypes = [
      {prop: 'USD'},
      {prop: 'EUR'},
      {prop: 'GBP'}
    ];
  }

  createForm() {

    this.amountFormControl = new FormControl('', [
      Validators.required
    ]);

    this.dateFormControl = new FormControl('', [
      Validators.required
    ]);

    this.nameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.iBANFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.bicFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.streetFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.zipCodeFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.cityFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.countryFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.currencyTypesFormControl = new FormControl( '', [
      Validators.required
    ]);

    this.makePaymentForm = this.fb.group({
      amountFormControl: [ '', Validators.required ],
      dateFormControl: [ '', Validators.required ],
      nameFormControl: [ '', Validators.required ],
      iBANFormControl: [ '', Validators.required ],
      bicFormControl: [ '', Validators.required ],
      streetFormControl: [ '', Validators.required ],
      zipCodeFormControl: [ '', Validators.required ],
      cityFormControl: [ '', Validators.required ],
      countryFormControl: [ '', Validators.required ],
      currencyTypesFormControl: [ '', Validators.required ]
    });
  }

  closeFXPayModal() {
    this.dialogRef.close();
  }
}
