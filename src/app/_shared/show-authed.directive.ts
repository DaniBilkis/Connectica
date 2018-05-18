import {
  Directive,
  Input,
  OnInit,
  ElementRef
} from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';

@Directive({
  selector: '[appShowAuth]'
})
export class ShowAuthedDirective implements OnInit {

  constructor( private el: ElementRef, private authService: AuthenticationService ) { }

  @Input('appShowAuth') condition: boolean;

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.el.nativeElement.style.display = 'inline';
          console.log('This user is Authenticated!!! ->' + isAuthenticated + ' ' + this.condition );
        } else {
          this.el.nativeElement.style.display = 'none';
          console.log('This user is NOT Authenticated!!! ->' + isAuthenticated + ' ' + this.condition );
        }
      }
    );
  }

}
