import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updatePassword
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
import { v4 as uuidv4 } from 'uuid'; 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private xlayoutpage: Router, private firestore: Firestore) {}
  private auth: Auth = inject(Auth);
  
  // signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(this.auth, provider)
  //     .then((result) => {
  //       console.log('Signed in:', result.user);

  //       // Navigate to another route or save user info
  //       this.xlayoutpage.navigate(['x-layout']);
  //     })
  //     .catch((error) => {
  //       console.error(' Sign-in error:', error);
  //     });
  // }
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(async (result) => {
        const user = result.user;
        const email = user.email;
  
        // Save signed-in email in Firestore (collection: 'google_users')
        const userDocRef = doc(this.firestore, `google_users/${user.uid}`);
        await setDoc(userDocRef, {
          email: email,
          signedInAt: new Date()
        });
  
        // Navigate to layout
        this.xlayoutpage.navigate(['/x-layout']);
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  }
  // Email Signup
  // async signup(
  //   name: string,
  //   dobMonth: string,
  //   dobDay: string,
  //   dobYear: string,
  //   email: string,
  //   password: string
  // ) {
  //   // 2. Create the user
  //   const userCredential = await createUserWithEmailAndPassword(
  //     this.auth,
  //     email,
  //     password
  //   );
  //   const uid = userCredential.user.uid;

    // 3. Send email verification
    // await sendEmailVerification(userCredential.user);

    // 4. Save user details in Firestore
  //   const userDocRef = doc(this.firestore, `joinees details/${uid}`);
  //   await setDoc(userDocRef, {
  //     email,
  //     createdAt: new Date(),
  //     dobDay,
  //     dobMonth,
  //     dobYear,
  //     name,
  //   });

  //   return userCredential;
  // }
  async signup(
    name: string,
    dobMonth: string,
    dobDay: string,
    dobYear: string,
    email: string
  ) {
    // 1. Generate a dummy password to create user now
    const dummyPassword = 'temporaryPassword123!';

    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      dummyPassword
    );
    const uid = userCredential.user.uid;

    // Save to localStorage for next steps
    localStorage.setItem('uid', uid);
    localStorage.setItem('verificationEmail', email);

    // 2. Save user details in Firestore
    const userDocRef = doc(this.firestore, `joinees details/${uid}`);
    await setDoc(userDocRef, {
      name,
      email,
      dobDay,
      dobMonth,
      dobYear,
      createdAt: new Date(),
    });

    return userCredential;
  }

  // 🔹 Password Setup (final step)
  async createAccountWithPassword(email: string, password: string) {
    // Delete temporary user first (optional)
    // Then re-create with final password
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  // 🔹 Sign In
  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async setPassword(newPassword: string) {
    const user = this.auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    await updatePassword(user, newPassword);
  }


  async checkIfEmailExistsAnywhere(email: string): Promise<boolean> {
    const userQuery = query(
      collection(this.firestore, 'joinees details'),
      where('email', '==', email)
    );
  
    const googleQuery = query(
      collection(this.firestore, 'google_users'),
      where('email', '==', email)
    );
  
    const [userSnap, googleSnap] = await Promise.all([
      getDocs(userQuery),
      getDocs(googleQuery)
    ]);
  
    return !userSnap.empty || !googleSnap.empty;
  }
}
