import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  imports: [],
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.css'
})
export class VerificationCodeComponent {
       constructor ( private password : Router){}
       setPassword(){
        this.password.navigate(['/password-setup'])
       }
}
