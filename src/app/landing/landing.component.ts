import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer.component';
import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}  stats = [
    { value: '1000+', label: 'Successful Placements' },
    { value: '6', label: 'Gulf Countries' },
    { value: '100+', label: 'Partner Companies' },
    { value: '1313', label: 'Egypt License No.' }
  ];
  features = [
    {
      icon: '✅',
      title: 'Licensed & Trusted',
      description: 'Fully certified by Egyptian authorities (License No. 1313), operating with transparency and legal compliance'
    },
    {
      icon: '🌍',
      title: 'Gulf-Wide Opportunities',
      description: 'Access to jobs across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman'
    },
    {
      icon: '🎯',
      title: 'Proven Success',
      description: 'Hundreds of successful placements in meaningful roles across the Gulf region'
    },
    {
      icon: '🤝',
      title: 'Ethical Recruitment',
      description: 'Strict ethical standards with legal and secure recruitment - no hidden fees or false promises'
    },
    {
      icon: '🛡️',
      title: 'End-to-End Support',
      description: 'Complete guidance from application to visa processing, pre-departure orientation, and post-arrival follow-up'
    },
    {
      icon: '🏢',
      title: 'Industry Expertise',
      description: 'Specialized in Construction, Hospitality, Healthcare, Engineering, Oil & Gas, and Retail sectors'
    }
  ];
  testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Construction Engineer',
      company: 'Saudi Mega Projects',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Team Work International helped me secure an amazing position in Riyadh. Their support throughout the entire process was exceptional!'
    },
    {
      name: 'Fatima Mohamed',
      role: 'Registered Nurse',
      company: 'UAE Healthcare Group',
      image: 'egyptlady.png',
      content: 'From application to arrival in Dubai, they guided me every step of the way. Professional, ethical, and truly caring about my success.'
    },
    {
      name: 'Omar Ali',
      role: 'Hospitality Manager',
      company: 'Qatar Luxury Hotels',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Thanks to Team Work International, I landed my dream job in Doha. Their reputation and connections in the Gulf are unmatched.'
    }
  ];

  ngOnInit() {
    this.initScrollAnimations();
  }
  private initScrollAnimations() {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections for scroll animations
    setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-animate');
      sections.forEach(section => observer.observe(section));
    }, 100);
  }
  scrollToSection(sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
