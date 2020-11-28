import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Component, ComponentFactoryResolver } from '@angular/core';
import { AlertComponent } from '../shared/alert/alert.component';

import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    f.reset();
  }

  onHandleError() {
    this.error = null;
  }

  // Called whenever we have error
  private showErrorAlert(errorMessage: string) {
    // const alertCmp = new AlertComponent(); // Valid Js code, but angular will throw error
    // Ng should create this component
    // This factory will know how to create component of AlertComponent type
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    // To place this component in specific place use: ViewContainerRef
  }
}
