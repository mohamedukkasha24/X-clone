import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from "../sign-up/sign-up.component";
@Component({
  selector: 'app-x-auth',
  imports: [RouterLink, CommonModule, SignUpComponent],
  templateUrl: './x-auth.component.html',
  styleUrls: ['./x-auth.component.css'],
})
export class XAuthComponent {

  isSignUpModal: boolean = false;

  constructor(private router: Router, private authservice: AuthService) {}

  [x: string]: any;

  signUp() {
    this.isSignUpModal = true;
    // this.router.navigate(['sign-up']);
  }
  signInWithGoogle() {
    this.authservice.signInWithGoogle();
  }
  
}
