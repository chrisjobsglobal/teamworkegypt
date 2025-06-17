import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer.component';
import { HeaderSingleComponent } from "../shared/header-single.component";

@Component({
  selector: 'app-career-tips',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderSingleComponent, FooterComponent, HeaderSingleComponent],
  templateUrl: './career-tips.component.html',
  styleUrls: ['./career-tips.component.css']
})
export class CareerTipsComponent {
  tips = [
    {
      id: 1,
      title: "Perfect Your Resume",
      icon: "📄",
      description: "Learn how to create a compelling resume that stands out to Egyptian employers.",
      content: "Your resume is your first impression. Make it count with these essential tips...",
      category: "Resume",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Master the Interview",
      icon: "🎯",
      description: "Essential interview tips and common questions asked by Egyptian companies.",
      content: "Preparation is key to interview success. Here's what you need to know...",
      category: "Interview",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Networking in Egypt",
      icon: "🤝",
      description: "Build professional relationships that can accelerate your career growth.",
      content: "Networking is crucial in the Egyptian job market. Learn effective strategies...",
      category: "Networking",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Salary Negotiation",
      icon: "💰",
      description: "How to negotiate your salary and benefits package confidently.",
      content: "Don't leave money on the table. Master the art of salary negotiation...",
      category: "Negotiation",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "LinkedIn Optimization",
      icon: "💼",
      description: "Optimize your LinkedIn profile to attract Egyptian recruiters.",
      content: "Your LinkedIn profile is your digital business card. Make it shine...",
      category: "Online Presence",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Industry Insights",
      icon: "📊",
      description: "Stay updated with the latest trends in Egypt's job market.",
      content: "Understanding market trends gives you a competitive edge...",
      category: "Market Trends",
      readTime: "10 min read"
    }
  ];

  categories = [
    'All',
    'Resume',
    'Interview',
    'Networking',
    'Negotiation',
    'Online Presence',
    'Market Trends'
  ];

  selectedCategory = 'All';

  get filteredTips() {
    if (this.selectedCategory === 'All') {
      return this.tips;
    }
    return this.tips.filter(tip => tip.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
