import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

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
export class SignUpComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  name = '';
  email = '';
  dobMonth = '';
  dobDay = '';
  dobYear = '';
  nameError = '';
  emailError = '';
  passwordError = '';
  dobError = '';
  isNameFocused = false;
  isEmailFocused = false;
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
    this.emailError = '';
    const usersRef = collection(this.firestore, 'joinees details');
    const q = query(usersRef, where('email', '==', this.email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      this.emailError = 'An account with this email already exists.';
      return;
    }
    try {
      await this.authService.signup(
        this.name,
        this.dobMonth,
        this.dobDay,
        this.dobYear,
        this.email,
      );

      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem('verificationCode', verificationCode.toString());
      // Call AuthService signup

      // Clear form
      this.name = '';
      this.email = '';
      this.dobDay = '';
      this.dobMonth = '';
      this.dobYear = '';

      // Navigate to verification
      this.router.navigate(['/verification-code']);
    } catch (error: any) {
      alert('Sign Up failed: ' + error.message);
    }
  }
  validateName() {
    if (!this.name.trim()) {
      this.nameError = 'What"s your name?';
    } else {
      this.nameError = '';
    }
  }
  validateEmail() {
    const trimmedEmail = this.email.trim();
    this.emailError = '';

    if (!trimmedEmail) {
      this.emailError = 'Email is required.';
    } else if (/[A-Z]/.test(trimmedEmail)) {
      this.emailError = 'Email must not contain uppercase letters.';
    } else if (trimmedEmail.length < 5) {
      this.emailError = 'Email is too short.';
    } else {
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|in|edu)$/;
      if (!pattern.test(trimmedEmail)) {
        this.emailError = 'Email must end with .com, .in, or .edu';
      }
    }
  }
  isFormValid(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.email.trim().length > 0 &&
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.email) &&
      this.dobDay !== '' &&
      this.dobMonth !== '' &&
      this.dobYear !== ''
    );
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nameInputRef.nativeElement.focus();
    }, 0);
  }
  showSpinner = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 900);
  }
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit(); // Tell parent to hide modal
  }
}
