import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FooterComponent } from '../shared/footer.component';
import { HeaderSingleComponent } from '../shared/header-single.component';

interface Tip {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string;
  category: string;
  readTime: string; // Assuming readTime is static for now, or you can localize it too
}

@Component({
  selector: 'app-career-tips',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderSingleComponent,
    FooterComponent,
    HeaderSingleComponent,
  ],
  templateUrl: './career-tips.component.html',
  styleUrls: ['./career-tips.component.css'],
})
export class CareerTipsComponent {
  constructor(private router: Router) {}

  // Ensure you have this import at the very top of your file if not in main.ts/polyfills.ts
  // import '@angular/localize/init';

  public tips: Tip[] = [
    {
      id: 1,
      title: $localize`:@@tip1_title:Perfect Your Resume`,
      icon: '📄',
      description: $localize`:@@tip1_description:Learn how to create a compelling resume that stands out to Egyptian employers.`,
      content: $localize`:@@tip1_content:Your resume is your first impression. Make it count with these essential tips for crafting a resume that gets noticed by Egyptian recruiters and hiring managers.`,
      category: $localize`:@@category_resume:Resume`,
      readTime: $localize`:@@tip1_readtime:5 min read`,
    },
    {
      id: 2,
      title: $localize`:@@tip2_title:Master the Interview`,
      icon: '🎯',
      description: $localize`:@@tip2_description:Essential interview tips and common questions asked by Egyptian companies.`,
      content: $localize`:@@tip2_content:Preparation is key to interview success. Learn the strategies and cultural considerations that will help you excel in Egyptian job interviews.`,
      category: $localize`:@@category_interview:Interview`,
      readTime: $localize`:@@tip2_readtime:7 min read`,
    },
    {
      id: 3,
      title: $localize`:@@tip3_title:Networking in Egypt`,
      icon: '🤝',
      description: $localize`:@@tip3_description:Build professional relationships that can accelerate your career growth.`,
      content: $localize`:@@tip3_content:Networking is crucial in the Egyptian job market. Discover effective strategies for building meaningful professional relationships that open doors to opportunities.`,
      category: $localize`:@@category_networking:Networking`,
      readTime: $localize`:@@tip3_readtime:6 min read`,
    },
    {
      id: 4,
      title: $localize`:@@tip4_title:Salary Negotiation`,
      icon: '💰',
      description: $localize`:@@tip4_description:How to negotiate your salary and benefits package confidently.`,
      content: $localize`:@@tip4_content:Don't leave money on the table. Master the art of salary negotiation with strategies tailored for the Egyptian job market and business culture.`,
      category: $localize`:@@category_negotiation:Negotiation`,
      readTime: $localize`:@@tip4_readtime:8 min read`,
    },
    {
      id: 5,
      title: $localize`:@@tip5_title:LinkedIn Optimization`,
      icon: '💼',
      description: $localize`:@@tip5_description:Optimize your LinkedIn profile to attract Egyptian recruiters.`,
      content: $localize`:@@tip5_content:Your LinkedIn profile is your digital business card. Learn how to optimize it for the Egyptian market and attract the right opportunities.`,
      category: $localize`:@@category_onlinePresence:Online Presence`,
      readTime: $localize`:@@tip5_readtime:4 min read`,
    },
    {
      id: 6,
      title: $localize`:@@tip6_title:Industry Insights`,
      icon: '📊',
      description: $localize`:@@tip6_description:Stay updated with the latest trends in Egypt's job market.`,
      content: $localize`:@@tip6_content:Understanding market trends gives you a competitive edge. Get insights into growing industries, in-demand skills, and economic factors affecting employment in Egypt.`,
      category: $localize`:@@category_marketTrends:Market Trends`,
      readTime: $localize`:@@tip6_readtime:10 min read`,
    },
  ];

  // Define your categories here, also using $localize, to use for filter buttons
  public categories = [
    $localize`:@@category_all:All`,
    $localize`:@@category_resume:Resume`,
    $localize`:@@category_interview:Interview`,
    $localize`:@@category_networking:Networking`,
    $localize`:@@category_negotiation:Negotiation`,
    $localize`:@@category_onlinePresence:Online Presence`,
    $localize`:@@category_marketTrends:Market Trends`,
  ];

  /*
  tips = [
    {      id: 1,
      title: "Perfect Your Resume",
      icon: "📄",
      description: "Learn how to create a compelling resume that stands out to Egyptian employers.",
      content: "Your resume is your first impression. Make it count with these essential tips for crafting a resume that gets noticed by Egyptian recruiters and hiring managers.",
      category: "Resume",
      readTime: "5 min read"
    },
    {      id: 2,
      title: "Master the Interview",
      icon: "🎯",
      description: "Essential interview tips and common questions asked by Egyptian companies.",
      content: "Preparation is key to interview success. Learn the strategies and cultural considerations that will help you excel in Egyptian job interviews.",
      category: "Interview",
      readTime: "7 min read"
    },
    {      id: 3,
      title: "Networking in Egypt",
      icon: "🤝",
      description: "Build professional relationships that can accelerate your career growth.",
      content: "Networking is crucial in the Egyptian job market. Discover effective strategies for building meaningful professional relationships that open doors to opportunities.",
      category: "Networking",
      readTime: "6 min read"
    },
    {      id: 4,
      title: "Salary Negotiation",
      icon: "💰",
      description: "How to negotiate your salary and benefits package confidently.",
      content: "Don't leave money on the table. Master the art of salary negotiation with strategies tailored for the Egyptian job market and business culture.",
      category: "Negotiation",
      readTime: "8 min read"
    },
    {      id: 5,
      title: "LinkedIn Optimization",
      icon: "💼",
      description: "Optimize your LinkedIn profile to attract Egyptian recruiters.",
      content: "Your LinkedIn profile is your digital business card. Learn how to optimize it for the Egyptian market and attract the right opportunities.",
      category: "Online Presence",
      readTime: "4 min read"
    },
    {      id: 6,
      title: "Industry Insights",
      icon: "📊",
      description: "Stay updated with the latest trends in Egypt's job market.",
      content: "Understanding market trends gives you a competitive edge. Get insights into growing industries, in-demand skills, and economic factors affecting employment in Egypt.",
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
  */

  selectedCategory = 'All';

  get filteredTips() {
    if (this.selectedCategory === 'All') {
      return this.tips;
    }
    return this.tips.filter((tip) => tip.category === this.selectedCategory);
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  viewTipDetail(tipId: number) {
    this.router.navigate(['/career-tips', tipId]);
  }
}
