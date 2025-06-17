// guards/no-auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  private auth: Auth = inject(Auth);

  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        const isVerified = localStorage.getItem('verified') === 'true';
        if (user && isVerified) {
          this.router.navigate(['/x-layout']); // Already logged in & verified
          resolve(false); // Block access to sign-up/sign-in
        } else {
          resolve(true); // Allow
        }
      });
    });
  }
}