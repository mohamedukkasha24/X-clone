import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private xlayoutpage : Router) {}
  private auth: Auth = inject(Auth);

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('Signed in:', result.user);
        
        // Navigate to another route or save user info
        this.xlayoutpage.navigate(['x-layout'])
      })
      .catch((error) => {
        console.error(' Sign-in error:', error);
      });
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        return sendEmailVerification(userCredential.user); // ✅ Send verification email
      }
    );
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
