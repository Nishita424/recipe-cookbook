import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz5QjXEtb_K47BjfT7-8F50suW3DXPsyM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz5QjXEtb_K47BjfT7-8F50suW3DXPsyM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorResponse) => this.handleError(errorResponse)));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured !';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not found!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user account has been disabled!';
        break;
    }
    return throwError(errorMessage);
  }
}
