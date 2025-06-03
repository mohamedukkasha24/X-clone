import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private auth: Auth = inject(Auth);

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('✅ Signed in:', result.user);
        // Navigate to another route or save user info
      })
      .catch((error) => {
        console.error('❌ Sign-in error:', error);
      });
  }
}
