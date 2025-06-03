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
  constructor(private password: Router) {}
  setPassword() {
    this.password.navigate(['/password-setup']);
  }


  enteredCode = '';

  verifyCode() {
    const savedCode = localStorage.getItem('verificationCode');
    if (this.enteredCode === savedCode) {
      alert('Verification successful!');
      this.password.navigate(['/password-setup']);
      // Navigate or do next step
    } else {
      alert('Invalid verification code');
    }
  }

}
