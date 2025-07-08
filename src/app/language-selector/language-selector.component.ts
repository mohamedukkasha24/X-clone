import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  constructor(private interestsection:Router){}
  languages = [
'Bangla – বাংলা',
    'English',
    'Gujarati – ગુજરાતી',
    'Hindi – हिन्दी',
    'Kannada – ಕನ್ನಡ',
    'Malayalam – മലയാളം',
    'Marathi – मराठी',
    'Nepali – नेपाली',
    'Odia – ଓଡ଼ିଆ',
    'Punjabi – ਪੰਜਾਬੀ',
    'Tamil – தமிழ்',
    'Telugu – తెలుగు',
    'Urdu – اُردُو',
    'Arabic – العربية',
    'Bengali (India) – বাংলা (ভারত)',
    'Chinese (Simplified) – 简体中文',
    'Chinese (Traditional) – 繁體中文',
    'French – Français',
    'German – Deutsch',
    'Indonesian – Bahasa Indonesia',
    'Italian – Italiano',
    'Japanese – 日本語',
    'Korean – 한국어',
    'Persian – فارسی',
    'Portuguese – Português',
    'Russian – Русский',
    'Spanish – Español',
    'Thai – ไทย',
    'Turkish – Türkçe',
    'Ukrainian – Українська',
    'Vietnamese – Tiếng Việt'
  ];

  selectedLanguages: string[] = [];

  toggleLanguage(language: string) {
    const index = this.selectedLanguages.indexOf(language);
    if (index > -1) {
      this.selectedLanguages.splice(index, 1);
    } else {
      this.selectedLanguages.push(language);
    }
  }

  isSelected(language: string): boolean {
    return this.selectedLanguages.includes(language);
  }

  continue() {
    console.log('Selected:', this.selectedLanguages);
    this.interestsection.navigate(['/select-interest'])
    // Navigate to next step
  }
}
