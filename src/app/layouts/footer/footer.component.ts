import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
