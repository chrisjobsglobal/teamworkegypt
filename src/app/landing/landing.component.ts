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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  stats = [
    { value: '10K+', label: 'Active Jobs' },
    { value: '5K+', label: 'Companies' },
    { value: '2M+', label: 'Job Seekers' },
    { value: '100%', label: 'Recruiter Love' }
  ];

  features = [
    {
      icon: '🎯',
      title: 'Smart Matching',
      description: 'AI-powered job matching that connects you with the perfect opportunities'
    },
    {
      icon: '⚡',
      title: 'Instant Applications',
      description: 'Apply to multiple jobs with one click using our smart application system'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Get personalized career advice and skill development recommendations'
    },
    {
      icon: '🤝',
      title: 'Direct Connect',
      description: 'Connect directly with hiring managers and skip the middleman'
    }
  ];

  testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Software Engineer',
      company: 'Tech Egypt',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Found my dream job in just 2 weeks! The platform is incredibly intuitive and effective.'
    },
    {
      name: 'Sara Mohamed',
      role: 'Marketing Manager',
      company: 'Digital Cairo',
      image: 'egyptlady.png',
      content: 'The best job platform in Egypt. Amazing support and great job opportunities.'
    },
    {
      name: 'Omar Ali',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Professional, fast, and reliable. Highly recommend to anyone looking for a career change.'
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
