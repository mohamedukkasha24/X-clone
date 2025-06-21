import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-notifications-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './notifications-x-layout.component.html',
  styleUrl: './notifications-x-layout.component.css',
})
export class NotificationsXLayoutComponent {
  constructor() {}
}
