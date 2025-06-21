import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-profile-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './profile-x-layout.component.html',
  styleUrl: './profile-x-layout.component.css',
})
export class ProfileXLayoutComponent {
  constructor() {}
}
