import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  Firestore,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private xlayoutpage: Router, private firestore: Firestore) {}
  private auth: Auth = inject(Auth);

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('Signed in:', result.user);

        // Navigate to another route or save user info
        this.xlayoutpage.navigate(['x-layout']);
      })
      .catch((error) => {
        console.error(' Sign-in error:', error);
      });
  }

  // Email Signup
  async signup(
    name: string,
    dobMonth: string,
    dobDay: string,
    dobYear: string,
    email: string,
    password: string
  ) {
    // 2. Create the user
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // 3. Send email verification
    // await sendEmailVerification(userCredential.user);

    // 4. Save user details in Firestore
    const userDocRef = doc(this.firestore, `joinees details/${uid}`);
    await setDoc(userDocRef, {
      email,
      createdAt: new Date(),
      dobDay,
      dobMonth,
      dobYear,
      name,
    });

    return userCredential;
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
  
}
