import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private verifycode: Router, private router: Router) {
    const data: any = localStorage.getItem('users');
    console.log('Hi', JSON.parse(data));
  }

  // getVerificationCode(){
  //   this.verifycode.navigate(['/verification-code'])
  // }
  name = '';
  email = '';
  dobMonth = '';
  dobDay = '';
  dobYear = '';
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  // You can add a password field visually later

  registerUser() {
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

    // Load existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user: any) => user.email === this.email);

    if (existingUser) {
      alert('This email is already registered! Please enter another email ID.');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      dob: `${this.dobMonth} ${this.dobDay}, ${this.dobYear}`,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('verificationEmail', this.email); // Add this

    alert('Account created successfully!');
    this.router.navigate(['/verification-code']);

    

    const verificationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit

    localStorage.setItem('verificationCode', verificationCode.toString()); // Store for later validation

    console.log('Sent verification code:', verificationCode); // Simulate sending

    alert(`Verification code sent to ${this.email}`); // In real apps, send via email/SMS
    this.router.navigate(['/verification-code']);
  }
}
