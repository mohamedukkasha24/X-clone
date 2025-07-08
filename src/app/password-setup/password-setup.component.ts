import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password-setup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-setup.component.html',
  styleUrl: './password-setup.component.css',
})
export class PasswordSetupComponent {
  enteredPassword: string = '';
  isFocused = false;
  passwordError = '';
  @ViewChild('passwordInput') passwordInputRef!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.passwordInputRef.nativeElement.focus();
      this.isFocused = true;
    });
  }

  validatePassword(): boolean {
    if (this.enteredPassword.length < 8) {
      this.passwordError = 'Password must be at least 8 characters';
      return false;
    }
    this.passwordError = '';
    return true;
  }

  async validateAndContinue() {
    try {
      if (this.enteredPassword.length < 8) {
        alert('Password must be at least 8 characters');
        return;
      }

      await this.authService.setPassword(this.enteredPassword);
      this.router.navigate(['/profile-picture-setup']);
    } catch (error: any) {
      console.error('Password update error:', error);
      alert('Something went wrong: ' + error.message);
    }
  }
}
