import { Component, Inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Language Toggle -->
    <button
      (click)="toggleLanguage()"
      class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150"
      type="button"
      [title]="'Switch to ' + getOtherLanguageName()">
        <span class="text-base mr-2">{{ getCurrentLanguageFlag() }}</span>
      <span class="hidden sm:inline mr-1">{{ getCurrentLanguageName() }}</span>
      <span class="text-xs text-gray-400 hidden sm:inline">{{ getArrowDirection() }}</span>
      <span class="text-base ml-1">{{ getOtherLanguageFlag() }}</span>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LanguageSelectorComponent {
  currentLocale: string;

  languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: '🇺🇸'
    },
    { 
      code: 'ar', 
      name: 'العربية', 
      flag: '🇪🇬'
    }
  ];

  constructor(
    @Inject(LOCALE_ID) localeId: string,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLocale = localeId;
  }
  getCurrentLanguageFlag(): string {
    const current = this.languages.find(lang => lang.code === this.currentLocale);
    return current ? current.flag : '🇺🇸';
  }

  getCurrentLanguageName(): string {
    const current = this.languages.find(lang => lang.code === this.currentLocale);
    return current ? current.name : 'English';
  }

  getOtherLanguageFlag(): string {
    const other = this.languages.find(lang => lang.code !== this.currentLocale);
    return other ? other.flag : '🇪🇬';
  }
  getOtherLanguageName(): string {
    const other = this.languages.find(lang => lang.code !== this.currentLocale);
    return other ? other.name : 'العربية';
  }
  getArrowDirection(): string {
    // If current language is Arabic, arrow points left (←) towards English
    // If current language is English, arrow points right (→) towards Arabic
    return this.currentLocale === 'ar' ? '←' : '→';
  }

  toggleLanguage() {
    const otherLanguage = this.languages.find(lang => lang.code !== this.currentLocale);
    if (otherLanguage) {
      this.switchLanguage(otherLanguage.code);
    }
  }

  switchLanguage(langCode: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (langCode === this.currentLocale) {
      return;
    }

    // Get current path without locale prefix
    const currentPath = window.location.pathname;
    let newPath = currentPath;

    // Remove existing locale prefix if present
    if (currentPath.startsWith('/ar/')) {
      newPath = currentPath.substring(3);
    } else if (currentPath.startsWith('/en/')) {
      newPath = currentPath.substring(3);
    }

    // Add new locale prefix if not English (default)
    if (langCode === 'ar') {
      newPath = '/ar' + newPath;
    }

    // Ensure the path starts with /
    if (!newPath.startsWith('/')) {
      newPath = '/' + newPath;
    }

    // Navigate to the new URL
    window.location.href = newPath;
  }
}
