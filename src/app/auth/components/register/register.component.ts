// src/app/auth/components/register/register.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    // private authService: AuthService
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:5000/api/auth/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']))
  }

  // register(userFormData: any): void {
  //   // Call the register service method here and handle the response
  // }
}
