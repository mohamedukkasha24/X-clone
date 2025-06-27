import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-password-setup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-setup.component.html',
  styleUrl: './password-setup.component.css',
})
export class PasswordSetupComponent {
  enteredPassword: string = '';

  constructor(private router: Router) {}

  validateAndContinue() {
    const originalPassword = localStorage.getItem('signupPassword');

    if (!this.enteredPassword) {
      alert('Please enter a password');
      return;
    }

    if (this.enteredPassword === originalPassword) {
      this.router.navigate(['/x-layout']);
    } else {
      alert('Passwords do not match. Please try again.');
    }
  }
}
