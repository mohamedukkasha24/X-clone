import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-username-setup',
  imports: [FormsModule, CommonModule],
  templateUrl: './username-setup.component.html',
  styleUrl: './username-setup.component.css'
})
export class UsernameSetupComponent {
  enteredusername: string = '';
  isFocused = false;
  usernameError = '';
  @ViewChild('usernameInput') usernameInputRef!: ElementRef;

  constructor(private authService: AuthService, private router: Router,private selectlanguage:Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.usernameInputRef.nativeElement.focus();
      this.isFocused = true;
    });
  }

gotoselectlanguage(){
   this.selectlanguage.navigate(['/language-selector'])
}

  
}
