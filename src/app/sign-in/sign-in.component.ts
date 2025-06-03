import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private router: Router) {}

goToSignup() {
  this.router.navigate(['/inside-sign-up']); // Make sure /signup route exists
}
  closeModal() {
    // Logic to hide modal (routing or conditional rendering)
  }
}
