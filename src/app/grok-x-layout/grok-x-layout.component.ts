import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-grok-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './grok-x-layout.component.html',
  styleUrl: './grok-x-layout.component.css',
})
export class GrokXLayoutComponent {
  constructor() {}
}
