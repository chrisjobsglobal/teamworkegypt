import { Component, OnInit, OnDestroy, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gallery-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            <span i18n="@@gallery.title">Our Recruitment Journey</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" i18n="@@gallery.subtitle">
            Witness the diverse talent taking skill assessments during our recruitment trips across Egypt. 
            See how we discover exceptional people ready for their next career adventure.
          </p>
          <div class="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <!-- Carousel Container -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Main Display -->
          <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4 transform hover:scale-[1.02] transition-transform duration-500">
            <div class="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
              <img 
                [src]="currentImage()" 
                [alt]="'Recruitment photo ' + (currentIndex() + 1)"
                class="w-full h-full object-cover transition-all duration-700 ease-in-out"
                [class.opacity-0]="isTransitioning()"
                [class.opacity-100]="!isTransitioning()"
                (load)="onImageLoad()"
                loading="lazy"
              />
              
              <!-- Loading overlay -->
              <div *ngIf="isTransitioning()" class="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              
              <!-- Image Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-6 left-6 text-white">
                  <h3 class="text-xl md:text-2xl font-semibold mb-2" i18n="@@gallery.skillAssessment">Skill Assessment Session</h3>
                  <p class="text-sm md:text-base opacity-90" i18n="@@gallery.recruitmentTrip">During our recruitment trip across Egypt</p>
                </div>
                <div class="absolute top-6 right-6 text-white">
                  <span class="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {{ currentIndex() + 1 }} / {{ images.length }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button 
            (click)="previousImage()"
            class="absolute left-2 md:left-10 top-1/2 -translate-y-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 backdrop-blur-sm"
            [disabled]="isTransitioning()"
            [class.opacity-50]="isTransitioning()"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            (click)="nextImage()"
            class="absolute right-2 md:right-10 top-1/2 -translate-y-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 backdrop-blur-sm"
            [disabled]="isTransitioning()"
            [class.opacity-50]="isTransitioning()"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Thumbnail Strip - Simple version for all devices -->
          <div class="mt-8 relative">
            <div class="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center">
              <div class="flex gap-3">
                @for (image of images; track $index) {
                  <button
                    (click)="goToImage($index)"
                    class="flex-shrink-0 relative group transition-all duration-300"
                    [class.ring-4]="currentIndex() === $index"
                    [class.ring-blue-500]="currentIndex() === $index"
                    [class.shadow-lg]="currentIndex() === $index"
                  >
                    <img 
                      [src]="image" 
                      [alt]="'Thumbnail ' + ($index + 1)"
                      class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-xl shadow-md transition-all duration-300"
                      [class.opacity-50]="currentIndex() !== $index"
                      [class.opacity-100]="currentIndex() === $index"
                      [class.scale-110]="currentIndex() === $index"
                      loading="lazy"
                    />
                    <div 
                      class="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      [class.opacity-100]="currentIndex() === $index"
                    ></div>
                  </button>
                }
              </div>
            </div>
          </div>

          <!-- Progress Indicator -->
          <div class="flex justify-center mt-6 gap-2">
            @for (image of images; track $index) {
              <button 
                class="h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125"
                [class.w-8]="currentIndex() === $index"
                [class.w-2]="currentIndex() !== $index"
                [class.bg-blue-500]="currentIndex() === $index"
                [class.bg-gray-300]="currentIndex() !== $index"
                [class.shadow-md]="currentIndex() === $index"
                (click)="goToImage($index)"
              ></button>
            }
          </div>

          <!-- Auto-play control -->
          <div class="text-center mt-4 flex items-center justify-center gap-2">
            <button 
              (click)="toggleAutoPlay()"
              class="text-sm text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-1 auto-play-btn"
            >
              <svg *ngIf="!isAutoPlayPaused()" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4v16M18 4v16"></path>
              </svg>
              <svg *ngIf="isAutoPlayPaused()" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6l5-3-5-3z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              {{ isAutoPlayPaused() ? 'Resume' : 'Pause' }} Auto-play
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit, OnDestroy {
  private intervalId: any;
  
  currentIndex = signal(0);
  isTransitioning = signal(false);
  isAutoPlayPaused = signal(false);
  
  images = [
    '/gallery/a.jpeg',
    '/gallery/b.jpeg',
    '/gallery/c.jpeg',
    '/gallery/1.png',
    '/gallery/2.png',
    '/gallery/3.png',
    '/gallery/4.png',
    '/gallery/5.png',
    '/gallery/6.png',
    '/gallery/7.png',
    '/gallery/8.png',
    '/gallery/9.png',
    '/gallery/10.png',
    '/gallery/11.png',
    '/gallery/12.png',
    '/gallery/13.png',
    '/gallery/14.png',
    '/gallery/15.png',
    '/gallery/16.png',
    '/gallery/17.png'
  ];

  currentImage = computed(() => this.images[this.currentIndex()]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  private startAutoSlide() {
    if (!this.isAutoPlayPaused()) {
      this.intervalId = setInterval(() => {
        this.nextImage();
      }, 5000); // Change image every 5 seconds
    }
  }

  private stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleAutoPlay() {
    this.isAutoPlayPaused.set(!this.isAutoPlayPaused());
    if (this.isAutoPlayPaused()) {
      this.stopAutoSlide();
    } else {
      this.startAutoSlide();
    }
  }

  nextImage() {
    if (this.isTransitioning()) return;
    
    this.isTransitioning.set(true);
    this.currentIndex.set((this.currentIndex() + 1) % this.images.length);
    
    setTimeout(() => this.isTransitioning.set(false), 500);
    this.resetAutoSlide();
  }

  previousImage() {
    if (this.isTransitioning()) return;
    
    this.isTransitioning.set(true);
    this.currentIndex.set(this.currentIndex() === 0 ? this.images.length - 1 : this.currentIndex() - 1);
    
    setTimeout(() => this.isTransitioning.set(false), 500);
    this.resetAutoSlide();
  }

  goToImage(index: number) {
    if (this.isTransitioning() || index === this.currentIndex() || index < 0 || index >= this.images.length) return;
    
    this.isTransitioning.set(true);
    this.currentIndex.set(index);
    
    setTimeout(() => this.isTransitioning.set(false), 500);
    this.resetAutoSlide();
  }

  onImageLoad() {
    // Handle image load events if needed
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    if (!this.isAutoPlayPaused()) {
      this.startAutoSlide();
    }
  }
}
