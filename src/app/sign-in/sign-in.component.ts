import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private router: Router , private authservice:AuthService) {}

goToSignup() {
  this.router.navigate(['/inside-sign-up']); // Make sure /signup route exists
}
signInWithGoogle(){
  this.authservice.signInWithGoogle()
}
}
