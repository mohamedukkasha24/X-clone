import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-more-x-layout',
  imports: [CommonModule],
  templateUrl: './more-x-layout.component.html',
  styleUrl: './more-x-layout.component.css'
})
export class MoreXLayoutComponent {
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const clickedInside = target.closest('.more-popup') || target.closest('button');
    if (!clickedInside) {
      this.closePopup();
    }
  }
}
