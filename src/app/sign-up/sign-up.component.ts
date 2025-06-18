import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  name = '';
  email = '';
  password = '';
  dobMonth = '';
  dobDay = '';
  dobYear = '';
  otpSent = false;
  otp = '';
  phoneNumber = '';
  verificationId = '';

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestore: Firestore
  ) {}

  async registerUser() {
    // Input validations
    if (!this.name || !this.email) {
      alert('Name and Email are required!');
      return;
    }

    if (/[A-Z]/.test(this.email)) {
      alert('Email must not contain uppercase letters.');
      return;
    }

    if (this.email.length < 5) {
      alert('Email is too short.');
      return;
    }

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      alert('Invalid email format.');
      return;
    }

    if (!this.dobMonth || !this.dobDay || !this.dobYear) {
      alert('Please select your full date of birth.');
      return;
    }

    // Check if user already exists in Firestore
    const usersRef = collection(this.firestore, 'joinees details');
    const q = query(usersRef, where('email', '==', this.email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert('This email is already registered. Please use another one.');
      return;
    }

    try {
      // Call signup from AuthService
      await this.authService.signup(
        this.name,
        this.dobDay,
        this.dobMonth,
        this.dobYear,
        this.email,
        this.password
      );

      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem('verificationCode', verificationCode.toString());

      alert(
        `✅ Account created successfully! Verification code sent to ${this.email}`
      );

      // Clear form
      this.name = '';
      this.email = '';
      this.password = '';
      this.dobDay = '';
      this.dobMonth = '';
      this.dobYear = '';

      // Navigate to verification
      this.router.navigate(['/verification-code']);
    } catch (error: any) {
      alert('Sign Up failed: ' + error.message);
    }
  }
}
