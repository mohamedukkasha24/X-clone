import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-inside-sign-up',
  imports: [RouterLink],
  templateUrl: './inside-sign-up.component.html',
  styleUrl: './inside-sign-up.component.css',
})
export class InsideSignUpComponent {
  constructor(
    private router: Router,
    private createAccountPage: Router,
    private authservice: AuthService
  ) {}

  gotosigninpage() {
    this.router.navigate(['/sign-in']);
  }

  createAccount() {
    this.createAccountPage.navigate(['/sign-up']);
  }

  signInWithGoogle() {
    this.authservice.signInWithGoogle();
  }

  //test
}
