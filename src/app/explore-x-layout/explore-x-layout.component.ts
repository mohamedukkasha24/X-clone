import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-explore-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './explore-x-layout.component.html',
  styleUrl: './explore-x-layout.component.css',
})
export class ExploreXLayoutComponent {
  constructor() {}
}
