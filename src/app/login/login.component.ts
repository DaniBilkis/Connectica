import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { Credentials } from '../_shared/credentials.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

@Component({
  //moduleId: module.id.toString(),
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loading = false;
  returnUrl: string;
  loginDescription: string;
  email: string;

  // registrationForm: FormGroup;
  loginForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl( [

  ]);

  matcher = new MyErrorStateMatcher();


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {

    this.loginDescription = 'Login';

    this.loginForm = fb.group({
      emailFormControl: [ this.email, Validators.required],
      // category: ['some category', Validators.required],
      // releasedAt: [moment(), Validators.required],
      passwordFormControl: [ ]
    });
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    console.log( 'This is what comes from the login form ->' + JSON.stringify( this.loginForm.value ) );
    const username = this.loginForm.value.emailFormControl;
    const password = this.loginForm.value.passwordFormControl;
    console.log( 'This is what comes from the login form after asignment ->' + JSON.stringify( { username, password } ) );
    console.log( 'if successful will navigate to -> ' + this.returnUrl );
    const credentials: Credentials = {
      username,
      password
    };

    this.authenticationService.login( credentials )
      .subscribe(
        data => {
          console.log( 'This is what comes back from the API ->' + JSON.stringify( data ) );
          this.loading = false;
          this.authenticationService.setUser(
            data.token,
            data.userInfo,
            data.expiresAt
          );
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
