import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-communities-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './communities-x-layout.component.html',
  styleUrl: './communities-x-layout.component.css',
})
export class CommunitiesXLayoutComponent {
  constructor() {}
}
