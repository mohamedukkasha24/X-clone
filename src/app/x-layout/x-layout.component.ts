import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-x-layout',
  imports: [CommonModule,SidebarComponent],
  templateUrl: './x-layout.component.html',
  styleUrl: './x-layout.component.css',
})
export class XLayoutComponent {
  constructor() {}
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
      // You can now upload it to Firebase, API, etc.
    }
  }
  selectedTab: 'for-you' | 'following' = 'for-you';

  selectTab(tab: 'for-you' | 'following') {
    this.selectedTab = tab;
  }
  }


