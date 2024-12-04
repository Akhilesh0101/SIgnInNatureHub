import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone:true,
  templateUrl: './auth.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  userSignInForm: FormGroup;
  userSignUpForm: FormGroup;
  adminSignInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize forms
    this.userSignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.userSignUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.adminSignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // User Sign In
  onUserSignIn() {
    if (this.userSignInForm.valid) {
      console.log('User Sign In:', this.userSignInForm.value);
    }
  }

  // User Sign Up
  onUserSignUp() {
    if (this.userSignUpForm.valid) {
      console.log('User Sign Up:', this.userSignUpForm.value);
    }
  }

  // Admin Sign In
  onAdminSignIn() {
    if (this.adminSignInForm.valid) {
      console.log('Admin Sign In:', this.adminSignInForm.value);
    }
  }
}
