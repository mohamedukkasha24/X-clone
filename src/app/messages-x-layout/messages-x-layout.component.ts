import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-messages-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './messages-x-layout.component.html',
  styleUrl: './messages-x-layout.component.css',
})
export class MessagesXLayoutComponent {
  constructor() {}
}
