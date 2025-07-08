import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inside-sign-up',
  imports: [RouterLink,CommonModule],
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
   showSpinner = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 900);
  }
}
