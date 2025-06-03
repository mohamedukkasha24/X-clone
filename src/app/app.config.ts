import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


const firebaseConfig = {
  apiKey: "AIzaSyDUObtSjHQRxbdgwNNvv-4if2Qtax8gKYw",
  authDomain: "x-project-clone.firebaseapp.com",
  projectId: "x-project-clone",
  storageBucket: "x-project-clone.firebasestorage.app",
  messagingSenderId: "1096237104909",
  appId: "1:1096237104909:web:69daf455e6e7071eaafa44"
};

export const appConfig = [
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideAuth(() => getAuth()),
];
