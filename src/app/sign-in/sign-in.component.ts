import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import {Firestore,getDocs,collection,query,where,} from '@angular/fire/firestore';
@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(
    private router: Router,
    private authservice: AuthService,
    private xlayout: Router,
    private firestore: Firestore
  ) {}

  email = '';
  password = '';

  goToXlayout() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    this.authservice
      .login(this.email, this.password)
      .then(() => {
        // Login successful — Navigate to x-layout
        this.xlayout.navigate(['x-layout']);
      })
      .catch(async (error) => {
        // If login failed, check if the email exists in Firestore
        const usersRef = collection(this.firestore, 'joinees details');
        const q = query(usersRef, where('email', '==', this.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          alert('Incorrect password.');
        } else {
          alert('Please Check Your Email Address');
        }
      });
  }

  goToSignup() {
    this.router.navigate(['/inside-sign-up']); // Make sure /signup route exists
  }
}
