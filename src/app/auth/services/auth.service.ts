import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private readonly TOKEN_KEY = 'auth_token'; // Key for storing the token in localStorage

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    const loginUrl = `${this.apiUrl}/auth/login`;
    const credentials = { email, password };
    return this.http.post<User>(loginUrl, credentials).pipe(
      tap((res: any) => {
        // Save the token to localStorage upon successful login
        localStorage.setItem(this.TOKEN_KEY, res.token);
      })
    );
  }

  getToken(): string | null {
    // Get the token from localStorage
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // isLoggedIn(): boolean {
  //   // Check if the token exists in localStorage
  //   return !!this.getToken();
  // }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  logout(): boolean {
    // Remove the token from localStorage upon logout
    localStorage.removeItem(this.TOKEN_KEY);
    return true; // Return true for successful logout
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { User } from '../models/user.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5000/api'; // Replace this with your NestJS backend API URL
//   private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
//   isLoggedIn$ = this._isLoggedIn$.asObservable()

//   constructor(private http: HttpClient) {
//     const token = localStorage.getItem('auth')
//     this._isLoggedIn$.next(!!token)
//   }

//   login(email: string, password: string) {
//     const loginUrl = `${this.apiUrl}/auth/login`; // Replace 'login' with the appropriate API endpoint for login
//     const credentials = { email, password }; // Create an object with email and password properties
//     return this.http.post<User>(loginUrl, credentials).pipe(
//       tap((response: any) => {
//         this._isLoggedIn$.next(true)
//         localStorage.setItem('auth', response.token)
//       })
//     )
//   }
// }
