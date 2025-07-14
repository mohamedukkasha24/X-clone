import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  doc,
  updateDoc,
  getDoc,Firestore,
} from '@angular/fire/firestore';
@Component({
  selector: 'app-username-setup',
  imports: [FormsModule, CommonModule],
  templateUrl: './username-setup.component.html',
  styleUrl: './username-setup.component.css'
})
export class UsernameSetupComponent{
  enteredusername: string = '';
  isFocused = false;
  usernameError = '';
  suggestions: string[] = [];

  @ViewChild('usernameInput') usernameInputRef!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: Firestore
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.usernameInputRef.nativeElement.focus();
      this.isFocused = true;
    });
    this.generateUsernameSuggestions(); // Generate suggestions after view loads
  }

  async generateUsernameSuggestions() {
    const uid = localStorage.getItem('uid');
    if (!uid) return;

    try {
      const fullName = await this.authService.getUserNameByUID(uid);
      if (!fullName) return;

      const cleaned = fullName.toLowerCase().replace(/\s+/g, '');
      const randomNum = () => Math.floor(Math.random() * 1000);

      this.suggestions = [
        `${cleaned}`,
        `${cleaned}${randomNum()}`,
        `${cleaned}_${randomNum()}`,
        `${cleaned.slice(0, 3)}_${cleaned.slice(-3)}${randomNum()}`,
        `${cleaned}_${new Date().getFullYear()}`
      ];
    } catch (error) {
      console.error('Error generating username suggestions:', error);
    }
  }

  selectUsername(name: string) {
    this.enteredusername = name;
    this.saveUsernameToFirestore(name);
  }
  

  async gotoselectlanguage() {
    if (this.enteredusername.trim()) {
      await this.saveUsernameToFirestore(this.enteredusername);
    }
    this.router.navigate(['/language-selector']);
  }
  
  async saveUsernameToFirestore(username: string) {
    const uid = localStorage.getItem('uid');
    if (!uid) {
      this.usernameError = 'User not found';
      return;
    }
  
    const userRef = doc(this.firestore, `joinees details/${uid}`);
    const userSnap = await getDoc(userRef);
  
    if (!userSnap.exists()) {
      this.usernameError = 'User data not found';
      return;
    }
  
    await updateDoc(userRef, {
      username: username.trim()
    });

  }
}
