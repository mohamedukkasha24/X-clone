import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-x-auth',
  imports: [RouterLink],
  templateUrl: './x-auth.component.html',
  styleUrls: ['./x-auth.component.css']
})
export class XAuthComponent {

  constructor( private router: Router, private authservice:AuthService) { }
  
  [x: string]: any;
   
  signUp(){
    this.router.navigate(['sign-up']) ;
  }
  signInWithGoogle(){
    this.authservice.signInWithGoogle()
  }

   
  // private auth: Auth = inject(Auth);

  // signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(this.auth, provider)
  //     .then((result) => {
  //       console.log('✅ Signed in:', result.user);
  //       // Navigate to another route or save user info
  //     })
  //     .catch((error) => {
  //       console.error('❌ Sign-in error:', error);
  //     });
  // }

}
