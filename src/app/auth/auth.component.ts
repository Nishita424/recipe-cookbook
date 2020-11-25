import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

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

    if (this.isLoggedIn) {
    } else {
      this.authService.signup(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          this.isLoading = false;
        },
        (errorData) => {
          this.error = 'This is an error';
          console.log(errorData);
          this.isLoading = false;
        }
      );
    }

    f.reset();
  }
}
