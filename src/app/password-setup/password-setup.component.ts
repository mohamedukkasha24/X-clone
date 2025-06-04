import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

@Component({
  selector: 'app-password-setup',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './password-setup.component.html',
  styleUrl: './password-setup.component.css'
})
export class PasswordSetupComponent{
 
}
