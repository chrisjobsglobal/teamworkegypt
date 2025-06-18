import { Component, Inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block text-left">
      <button
        (click)="toggleDropdown()"
        class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        type="button"
        [attr.aria-expanded]="isOpen"
        aria-haspopup="true">
        <span class="mr-2">{{ getCurrentLanguageDisplay() }}</span>
        <svg class="w-4 h-4 transform transition-transform" [class.rotate-180]="isOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        *ngIf="isOpen"
        class="absolute right-0 z-50 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical">
        <div class="py-1" role="none">
          <button
            *ngFor="let lang of languages"
            (click)="switchLanguage(lang.code)"
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            [class.bg-purple-50]="lang.code === currentLocale"
            [class.text-purple-700]="lang.code === currentLocale"
            role="menuitem">
            <span class="mr-3 text-lg">{{ lang.flag }}</span>
            <span>{{ lang.name }}</span>
            <svg
              *ngIf="lang.code === currentLocale"
              class="ml-auto w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay to close dropdown when clicking outside -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 z-40"
      (click)="closeDropdown()">
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LanguageSelectorComponent {
  isOpen = false;
  currentLocale: string;

  languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇪🇬' }
  ];

  constructor(
    @Inject(LOCALE_ID) localeId: string,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLocale = localeId;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  getCurrentLanguageDisplay(): string {
    const current = this.languages.find(lang => lang.code === this.currentLocale);
    return current ? `${current.flag} ${current.name}` : '🇺🇸 English';
  }

  switchLanguage(langCode: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.closeDropdown();
    
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
