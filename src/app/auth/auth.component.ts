import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { AuthService } from './auth.service';

import { AuthResponseData } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onToggleAuthMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    const email = f.value.email;
    const password = f.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;
    if (this.isLoggedIn) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (responseData) => {
        // console.log(responseData);
        this.isLoading = false;

        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    f.reset();
  }
}
