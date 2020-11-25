import { Component } from '@angular/core';

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
}
