import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verification-code',
  imports: [FormsModule,CommonModule],
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.css',
})
export class VerificationCodeComponent implements AfterViewInit {
  email: string = '';
  isFocused = false;
  showError = false;
  ngOnInit() {
    this.email = localStorage.getItem('verificationEmail') || '';
  }
  constructor(private router: Router) {}
  @ViewChild('codeInput') codeInputRef!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.codeInputRef.nativeElement.focus();
      this.isFocused = true; // trigger label animation immediately
    }, 0);
  }

  enteredCode = '';

  verifyCode() {
    const savedCode = localStorage.getItem('verificationCode');
    if (this.enteredCode === savedCode) {
      this.showError = false;
      localStorage.setItem('verified', 'true');
      localStorage.removeItem('newUser');
      this.router.navigate(['/password-setup']);
    } else {
      this.showError = true;
  
      // Optional: auto-hide error after 5s
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    }
  }
}
