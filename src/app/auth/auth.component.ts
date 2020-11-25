import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = false;

  constructor() {}

  onToggleAuthMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    f.reset();
  }
}
