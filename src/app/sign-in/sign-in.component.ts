import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private router: Router , private authservice:AuthService , private xlayout : Router) {}


  email = '';
password = '';



goToXlayout(){
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const foundUser = users.find((user: any) => user.email === this.email);

  if (!foundUser) {
    alert('Email not found. Please sign up.');
    return;
  }

  if (foundUser.password !== this.password) {
    alert('Incorrect password. Please try again.');
    return;
  }

  // Success
  alert('Login successful!');
  this.xlayout.navigate(['x-layout']);
}

goToSignup() {
  this.router.navigate(['/inside-sign-up']); // Make sure /signup route exists
}

}
