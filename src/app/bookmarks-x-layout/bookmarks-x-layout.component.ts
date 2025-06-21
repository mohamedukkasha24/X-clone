import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-bookmarks-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './bookmarks-x-layout.component.html',
  styleUrl: './bookmarks-x-layout.component.css',
})
export class BookmarksXLayoutComponent {
  constructor() {}
}
