import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.authService.login(email, password) // Pass email and password as separate parameters
      .subscribe(
        (response: any) => {
          console.log(response.data);

          // Redirect to the desired route
          this.router.navigate(['/']);
        }
      );
  }
}
