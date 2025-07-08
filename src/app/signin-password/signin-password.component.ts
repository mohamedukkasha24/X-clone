import { CommonModule } from '@angular/common';
import {  AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import {Firestore,getDocs,collection,query,where,} from '@angular/fire/firestore';

@Component({
  selector: 'app-signin-password',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './signin-password.component.html',
  styleUrl: './signin-password.component.css'
})
export class SigninPasswordComponent {
  email: string = '';
  @ViewChild('passwordInput') passwordInputRef!: ElementRef;
  isFocused = false;
  password = '';
  showPassword: boolean = false;
  showSpinner = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('verificationEmail') || '';
    setTimeout(() => {
      this.showSpinner = false;
    }, 900);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.passwordInputRef.nativeElement.focus();
      this.isFocused = true; // Trigger label animation
    }, 0);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onPasswordChange() {
    // Password typed => you can add real-time validation here
  }

  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => this.router.navigate(['/x-layout']))
      .catch((err) => alert(err.message));
  }

  goToSignup() {
    this.router.navigate(['/inside-sign-up']);
  }
}


