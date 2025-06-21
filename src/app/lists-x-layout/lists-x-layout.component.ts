import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-lists-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './lists-x-layout.component.html',
  styleUrl: './lists-x-layout.component.css',
})
export class ListsXLayoutComponent {
  constructor() {}
}
