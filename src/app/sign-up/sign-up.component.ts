import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private verifycode:Router, private router: Router){}

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

       // ✅ Email format check
       if (!this.email.includes('@')) {
        alert('Please enter a valid email address containing "@"');
        return;
      }

        // ✅ Check if email contains any uppercase letters
        if (/[A-Z]/.test(this.email)) {
           alert('Email must not contain uppercase letters.');
            return;
        }

        if (!this.dobMonth || !this.dobDay || !this.dobYear) {
          alert('Please select your complete date of birth (Month, Day, Year)');
          return;
        }

    const user = { name: this.name, email: this.email ,  dob: `${this.dobMonth} ${this.dobDay}, ${this.dobYear}`};
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created successfully!');
    this.router.navigate(['/verification-code']);
  }

}
