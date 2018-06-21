import { Component, OnInit }                                    from '@angular/core';
import { Router }                                       from '@angular/router';
import { FormBuilder, FormControl, FormGroup,
          FormGroupDirective, NgForm, Validators }      from '@angular/forms';
import { ErrorStateMatcher }                            from '@angular/material/core';

import { AlertService, UserService }                    from '../_services/';
import { User }                                         from '../_shared/user';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  //moduleId: module.id.toString(),
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  loading = false;

  email: string;

  registrationDescription: string;

  registrationForm: FormGroup;

  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;


  matcher = new MyErrorStateMatcher();


  registrationCredentials: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {

    this.registrationDescription = 'Registration';

    this.createForm();



  }

  createForm() {

    this.firstNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.passwordFormControl = new FormControl( [
    ]);

    this.registrationForm = this.fb.group({
      firstNameFormControl: [ '', Validators.required ],
      lastNameFormControl: [ '', Validators.required ],
      emailFormControl: [ this.email, Validators.required ],
      passwordFormControl: [ '', Validators.required ]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.loading = true;
    console.log( 'This is what comes from the form ->' + JSON.stringify( this.registrationForm.value ) );

    this.userService.create( this.prepareUser() )
      .subscribe(
        data => {
          // console.log( data );
          this.alertService.success( data, true );
          this.router.navigate(['/login']);
        },
        error => {
          // console.log( 'Here is what we have in the error --> ' + JSON.stringify( error, null, 4 ) );
          this.alertService.error( error.error );
          this.loading = false;
        });
  }

  prepareUser(): User {
    const formModel = this.registrationForm.value;

    const user: User = {
      firstName: formModel.firstNameFormControl,
      lastName: formModel.lastNameFormControl,
      email: formModel.emailFormControl,
      password: formModel.passwordFormControl
    };

    return user;
  }
}
