import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  imports: [FormsModule],
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.css',
})
export class VerificationCodeComponent {
  email: string = '';

  ngOnInit() {
    this.email = localStorage.getItem('verificationEmail') || '';
  }
  constructor(private password: Router , private router : Router) {}
  setPassword() {
    this.password.navigate(['/x-layout']);
  }

  enteredCode = '';

  verifyCode() {
    const savedCode = localStorage.getItem('verificationCode');
    if (this.enteredCode === savedCode) {
      alert('Verification successful!');
      localStorage.setItem('verified', 'true'); //  Set verification flag
      localStorage.removeItem('newUser');
      this.router.navigate(['/x-layout']); //  Navigate
    } else {
      alert('Invalid verification code');
    }
  }
}
 