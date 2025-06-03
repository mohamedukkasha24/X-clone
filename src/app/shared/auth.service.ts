import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firthauth : AngularFireAuth , private router : Router) { }
    
  //log in 
  login(email: string , password : string){
      this.firthauth.signInWithEmailAndPassword(email,password).then( res =>{
        localStorage.setItem('token','true');
      }, err => {
        alert('Something went wrong');
        this.router.navigate(['/login']);
      })
  }

  //sign in with google
  googleSignIn(){
      return this.firthauth.signInWithPopup(new GoogleAuthProvider).then (res =>{
          this.router.navigate(['/x-layout']);
          localStorage.setItem('token',JSON.stringify(res.user?.uid));
      }, err  =>{
          alert(err.message);
      })
  }
}
