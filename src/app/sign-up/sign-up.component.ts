import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import {
  Firestore,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(
    private verifycode: Router,
    private router: Router,
    private authService: AuthService,
    private firestore: Firestore
  ) {}
  name = '';
  email = '';
  password = '';
  dobMonth = '';
  dobDay = '';
  dobYear = '';
  otpSent = false;
  otp = '';
  phoneNumber = '';
  verificationId: string = '';
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  async registerUser() {
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
      alert('Please select your complete date of birth (Month, Day, Year)');
      return;
    }

    const usersRef = collection(this.firestore, 'joinees details');
    const q = query(usersRef, where('email', '==', this.email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert('This email is already registered. Please use another email.');
      return; //  Stop here — do not continue
    }

    try {
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
      this.name = '';
      this.email = '';
      this.password = '';
      this.dobDay = '';
      this.dobMonth = '';
      this.dobYear = '';

      this.router.navigate(['/verification-code']);
    } catch (error: any) {
      alert('Sign Up faield : ' + error.message);
    }
  }
}
