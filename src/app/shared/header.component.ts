import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2 group">
            <div class="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <img src="/teamlogo2.png" alt="TeamWork Egypt" width="200" class="object-contain">
            </div>
            
          </a>          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-purple-600 font-semibold"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </a>
            <a (click)="scrollToSection('features')" 
               class="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer">
              Features
            </a>
            <a (click)="scrollToSection('how-it-works')" 
               class="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer">
              How It Works
            </a>
            <a (click)="scrollToSection('testimonials')" 
               class="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer">
              Testimonials
            </a>
            <a routerLink="/career-tips" 
               routerLinkActive="text-purple-600 font-semibold"
               class="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Career Tips
            </a>
            
          </div>

          <!-- CTA Buttons -->
          <div class="flex items-center space-x-4">
            <a href="#" class="hidden sm:block text-gray-700 hover:text-purple-600 transition-colors font-medium">
              For Employers
            </a>

            <button 
              routerLink="/register"
              class="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Join Now
            </button>

            <button 
              routerLink="/register"
              class="md:hidden px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Join
            </button>
            
            <!-- Mobile Menu Button -->
            <button 
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>        <!-- Mobile Menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <div class="space-y-3">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               class="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">
              Home
            </a>
            <a routerLink="/career-tips" 
               (click)="closeMobileMenu()"
               class="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">
              Career Tips
            </a>
            <a href="#" 
               (click)="closeMobileMenu()"
               class="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">
              Browse Jobs
            </a>
            <a href="#" 
               (click)="closeMobileMenu()"
               class="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">
              Companies
            </a>
            <a href="#" 
               (click)="closeMobileMenu()"
               class="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">
              For Employers
            </a>
            <div class="pt-2">
              <button 
                routerLink="/register"
                (click)="closeMobileMenu()"
                class="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Spacer for fixed header -->
    <div class="h-20"></div>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  scrollToSection(sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileMenu();
  }
}
