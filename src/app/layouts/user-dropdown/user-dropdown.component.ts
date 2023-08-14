import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {
  userNameFromPayload: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('auth_token'); // Replace with your token key

    if (token) {
      const payload = this.jwtHelper.decodeToken(token);
      if (payload && payload.user && payload.user.name) {
        this.userNameFromPayload = payload.user.name;
      }
    }
  }

  logout(): void {
    try {
      if (this.authService.logout()) {
        this.router.navigate(['/login']); // Navigate to '/login' after successful logout
      } else {
        throw new Error('Logout failed'); // Throw an error if logout is not successful
      }
    } catch (error) {
      console.error(error); // Handle the error as per your requirements
    }
  }


}

