import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild , HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-picture-setup',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-picture-setup.component.html',
  styleUrl: './profile-picture-setup.component.css'
})
export class ProfilePictureSetupComponent {
  
  constructor(private router: Router, private username:Router) {}
 

  

  showOptions = false;
  @ViewChild('dropdownContainer') dropdownRef!: ElementRef;

  // Toggle dropdown
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  // Listen to clicks anywhere in the document
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (this.showOptions && this.dropdownRef && !this.dropdownRef.nativeElement.contains(target)) {
      this.showOptions = false;
    }
  }

  // Optional: image preview logic
  previewUrl: string = '';
  @ViewChild('fileInput') fileInputRef!: ElementRef;

  triggerFileInput() {
    this.fileInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.showOptions = false;
    }
  }

  removeImage() {
    this.previewUrl = '';
    this.showOptions = false;
  }
  
  gotousername(){
    this.username.navigate(['/username-setup']);
  }
}
