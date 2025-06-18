import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../shared/footer.component';
import { HeaderSingleComponent } from "../shared/header-single.component";

interface CareerTip {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  detailedContent: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      tips?: string[];
    }[];
    keyTakeaways: string[];
    actionSteps: string[];
  };
}

@Component({
  selector: 'app-career-tip-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderSingleComponent, FooterComponent],
  templateUrl: './career-tip-detail.component.html',
  styleUrls: ['./career-tip-detail.component.css']
})
export class CareerTipDetailComponent implements OnInit {
  currentTip: CareerTip | null = null;
  relatedTips: CareerTip[] = [];

  tips: CareerTip[] = [
    {
      id: 1,
      title: "Perfect Your Resume",
      icon: "📄",
      description: "Learn how to create a compelling resume that stands out to Egyptian employers.",
      content: "Your resume is your first impression. Make it count with these essential tips...",
      category: "Resume",
      readTime: "5 min read",
      detailedContent: {
        introduction: "Your resume is often the first point of contact with potential employers in Egypt. In a competitive job market, having a well-crafted resume can make the difference between landing an interview and being overlooked. This comprehensive guide will help you create a resume that not only meets Egyptian employer expectations but exceeds them.",
        sections: [
          {
            title: "Essential Resume Structure",
            content: "Egyptian employers typically prefer a clear, professional structure that highlights your qualifications efficiently. Your resume should follow a logical flow that makes it easy for hiring managers to find the information they need.",
            tips: [
              "Start with a professional header including your name, phone number, email, and LinkedIn profile",
              "Include a brief professional summary (2-3 lines) highlighting your key strengths",
              "List your work experience in reverse chronological order",
              "Include relevant education, certifications, and skills",
              "Keep it to 2 pages maximum for most positions"
            ]
          },
          {
            title: "Tailoring for Egyptian Market",
            content: "Understanding the local job market preferences is crucial for success. Egyptian employers often value specific qualifications and experiences that may differ from international standards.",
            tips: [
              "Include your nationality if you're Egyptian (preferred by many local companies)",
              "Mention your military service status if applicable (for male candidates)",
              "Highlight any experience with local companies or understanding of the Egyptian market",
              "Include relevant language skills (Arabic, English, French, etc.)",
              "Consider including a professional photo if common in your industry"
            ]
          },
          {
            title: "Content Optimization",
            content: "The content of your resume should tell a compelling story of your professional journey while highlighting achievements that matter to Egyptian employers.",
            tips: [
              "Use action verbs to describe your accomplishments",
              "Quantify your achievements with specific numbers and percentages",
              "Focus on results and impact rather than just job duties",
              "Include relevant keywords from the job description",
              "Highlight any cost savings, revenue generation, or process improvements"
            ]
          },
          {
            title: "Common Mistakes to Avoid",
            content: "Many candidates make critical errors that can immediately disqualify them from consideration. Being aware of these pitfalls can give you a significant advantage.",
            tips: [
              "Don't include personal information like marital status or age (unless specifically requested)",
              "Avoid using unprofessional email addresses",
              "Don't list irrelevant work experience or hobbies",
              "Ensure there are no spelling or grammatical errors",
              "Don't use overly complex formatting that may not display properly in applicant tracking systems"
            ]
          }
        ],
        keyTakeaways: [
          "A well-structured resume should tell your professional story clearly and concisely",
          "Tailor your resume to match Egyptian market expectations and job requirements",
          "Focus on quantifiable achievements rather than just listing responsibilities",
          "Keep formatting clean and professional while ensuring ATS compatibility",
          "Always proofread and have someone else review your resume before submitting"
        ],
        actionSteps: [
          "Review your current resume and identify areas for improvement",
          "Research the specific company and role you're applying for",
          "Customize your resume for each application",
          "Ask for feedback from professionals in your industry",
          "Keep your resume updated with recent achievements and skills"
        ]
      }
    },
    {
      id: 2,
      title: "Master the Interview",
      icon: "🎯",
      description: "Essential interview tips and common questions asked by Egyptian companies.",
      content: "Preparation is key to interview success. Here's what you need to know...",
      category: "Interview",
      readTime: "7 min read",
      detailedContent: {
        introduction: "Job interviews in Egypt often follow specific cultural and professional norms that can significantly impact your success. Understanding these expectations and preparing accordingly can dramatically improve your chances of landing the job you want.",
        sections: [
          {
            title: "Pre-Interview Preparation",
            content: "Thorough preparation is the foundation of interview success. Egyptian employers appreciate candidates who have taken the time to understand their company and the role.",
            tips: [
              "Research the company's history, values, and recent developments",
              "Understand the job requirements and prepare specific examples of relevant experience",
              "Prepare thoughtful questions about the role and company culture",
              "Practice common interview questions with friends or family",
              "Plan your route to the interview location and arrive 10-15 minutes early"
            ]
          },
          {
            title: "Common Interview Questions in Egypt",
            content: "While each interview is unique, certain questions appear frequently in Egyptian job interviews. Being prepared for these can boost your confidence and performance.",
            tips: [
              "'Tell me about yourself' - Prepare a 2-minute professional summary",
              "'Why do you want to work for our company?' - Show genuine interest and knowledge",
              "'What are your salary expectations?' - Research market rates beforehand",
              "'Where do you see yourself in 5 years?' - Demonstrate ambition and planning",
              "'Why are you leaving your current job?' - Stay positive and professional"
            ]
          },
          {
            title: "Cultural Considerations",
            content: "Understanding Egyptian business culture can help you make a positive impression and avoid potential misunderstandings during your interview.",
            tips: [
              "Dress conservatively and professionally (formal business attire is preferred)",
              "Greet interviewers with a firm handshake and maintain respectful eye contact",
              "Show respect for hierarchy - address senior staff with appropriate titles",
              "Be patient if the interview starts later than scheduled",
              "Express appreciation for the interviewer's time at the end of the meeting"
            ]
          },
          {
            title: "Demonstrating Your Value",
            content: "Egyptian employers want to see concrete evidence of your ability to contribute to their organization's success. Use specific examples to showcase your skills.",
            tips: [
              "Use the STAR method (Situation, Task, Action, Result) to structure your answers",
              "Provide specific examples of problems you've solved or goals you've achieved",
              "Highlight any experience working in the Egyptian market or with local clients",
              "Demonstrate your understanding of local business practices and challenges",
              "Show enthusiasm for contributing to the company's growth and success"
            ]
          }
        ],
        keyTakeaways: [
          "Preparation and research are critical for interview success in Egypt",
          "Understanding local business culture helps you make a positive impression",
          "Use specific examples and the STAR method to demonstrate your capabilities",
          "Professional appearance and respectful behavior are highly valued",
          "Ask thoughtful questions to show genuine interest in the role and company"
        ],
        actionSteps: [
          "Practice answering common interview questions out loud",
          "Research the company thoroughly before each interview",
          "Prepare specific examples that demonstrate your skills and achievements",
          "Plan your interview outfit and ensure it's appropriate for the company culture",
          "Follow up with a thank-you email within 24 hours of the interview"
        ]
      }
    },
    {
      id: 3,
      title: "Networking in Egypt",
      icon: "🤝",
      description: "Build professional relationships that can accelerate your career growth.",
      content: "Networking is crucial in the Egyptian job market. Learn effective strategies...",
      category: "Networking",
      readTime: "6 min read",
      detailedContent: {
        introduction: "In Egypt's relationship-driven business culture, networking isn't just helpful—it's essential. Building strong professional relationships can open doors to opportunities that might never be publicly advertised and provide valuable insights into your industry.",
        sections: [
          {
            title: "Understanding Egyptian Business Networks",
            content: "Egyptian professional networks often blend personal and business relationships, creating unique opportunities for career advancement. Understanding these dynamics is key to effective networking.",
            tips: [
              "Attend industry events, conferences, and professional association meetings",
              "Join local business groups and chambers of commerce",
              "Participate in university alumni networks and events",
              "Engage with professional groups on social media platforms",
              "Consider joining rotary clubs or other service organizations"
            ]
          },
          {
            title: "Building Authentic Relationships",
            content: "Successful networking in Egypt is about building genuine relationships rather than simply collecting contacts. Focus on creating meaningful connections that benefit both parties.",
            tips: [
              "Show genuine interest in others' work and challenges",
              "Offer help and support without expecting immediate returns",
              "Follow up consistently with new contacts",
              "Share relevant opportunities and information with your network",
              "Maintain relationships even when you're not actively job searching"
            ]
          },
          {
            title: "Leveraging Digital Platforms",
            content: "While face-to-face networking remains important in Egypt, digital platforms offer additional opportunities to expand your professional network and stay connected.",
            tips: [
              "Optimize your LinkedIn profile for the Egyptian market",
              "Join industry-specific groups on LinkedIn and Facebook",
              "Share relevant content and engage with others' posts",
              "Connect with colleagues, clients, and industry professionals online",
              "Use platforms like Wuzzuf and Bayt to connect with recruiters"
            ]
          },
          {
            title: "Networking Etiquette and Best Practices",
            content: "Effective networking requires understanding and respecting cultural norms while building professional relationships that can last throughout your career.",
            tips: [
              "Always be respectful and professional in all interactions",
              "Remember personal details about your contacts (family, interests, etc.)",
              "Offer value before asking for favors",
              "Be patient - relationship building takes time in Egyptian culture",
              "Express gratitude and acknowledge help you receive from your network"
            ]
          }
        ],
        keyTakeaways: [
          "Networking is relationship-driven in Egypt and requires genuine connection",
          "Mix traditional face-to-face networking with digital platform engagement",
          "Focus on giving value to others rather than just seeking personal benefit",
          "Consistency in maintaining relationships is crucial for long-term success",
          "Cultural sensitivity and respect are essential in all networking activities"
        ],
        actionSteps: [
          "Identify key industry events and professional associations to join",
          "Update your LinkedIn profile and start engaging with relevant content",
          "Reach out to 3-5 new professional contacts each month",
          "Schedule regular coffee meetings with existing contacts",
          "Create a system to track and maintain your professional relationships"
        ]
      }
    },
    {
      id: 4,
      title: "Salary Negotiation",
      icon: "💰",
      description: "How to negotiate your salary and benefits package confidently.",
      content: "Don't leave money on the table. Master the art of salary negotiation...",
      category: "Negotiation",
      readTime: "8 min read",
      detailedContent: {
        introduction: "Salary negotiation in Egypt requires a delicate balance of confidence, market knowledge, and cultural sensitivity. Many professionals leave money on the table simply because they don't know how to effectively negotiate their compensation package.",
        sections: [
          {
            title: "Market Research and Preparation",
            content: "Before entering any salary negotiation, you need to understand your worth in the Egyptian job market. This knowledge forms the foundation of your negotiation strategy.",
            tips: [
              "Research salary ranges for your position using platforms like Bayt, Wuzzuf, and Glassdoor",
              "Consider the company size, industry, and location when evaluating offers",
              "Factor in the total compensation package, not just base salary",
              "Understand the economic climate and industry growth trends",
              "Know your minimum acceptable offer before negotiations begin"
            ]
          },
          {
            title: "Timing Your Negotiation",
            content: "Knowing when and how to bring up salary discussions can significantly impact the outcome. Timing is crucial in Egyptian business culture.",
            tips: [
              "Wait for the employer to make the first offer when possible",
              "Negotiate after receiving a job offer, not during early interviews",
              "Consider negotiating salary during performance reviews if you're already employed",
              "Avoid salary discussions during Ramadan or other culturally sensitive periods",
              "Choose appropriate timing when your supervisor is likely to be receptive"
            ]
          },
          {
            title: "Negotiation Strategies and Tactics",
            content: "Effective salary negotiation requires a strategic approach that considers both your needs and the employer's constraints while maintaining professional relationships.",
            tips: [
              "Present your case based on your value and contributions to the organization",
              "Use market data to support your salary expectations",
              "Consider negotiating benefits if salary flexibility is limited",
              "Be prepared to justify why you deserve the increase you're requesting",
              "Maintain a collaborative rather than confrontational tone throughout"
            ]
          },
          {
            title: "Beyond Base Salary: Total Compensation",
            content: "In Egypt, the total compensation package often includes various benefits that can significantly increase your overall compensation even if base salary increases are limited.",
            tips: [
              "Negotiate health insurance coverage for family members",
              "Discuss transportation allowances or company car benefits",
              "Consider flexible working arrangements or additional vacation time",
              "Explore professional development and training opportunities",
              "Discuss performance bonuses and annual salary review schedules"
            ]
          }
        ],
        keyTakeaways: [
          "Thorough market research is essential before any salary negotiation",
          "Timing and cultural sensitivity can significantly impact negotiation success",
          "Focus on your value and contributions rather than personal financial needs",
          "Consider the total compensation package, not just base salary",
          "Maintain professionalism and positive relationships throughout the process"
        ],
        actionSteps: [
          "Research current market rates for your position and experience level",
          "Document your achievements and contributions to the organization",
          "Practice your negotiation conversation with trusted friends or mentors",
          "Prepare to discuss alternative benefits if salary increases aren't possible",
          "Plan your ideal outcome and minimum acceptable terms before negotiating"
        ]
      }
    },
    {
      id: 5,
      title: "LinkedIn Optimization",
      icon: "💼",
      description: "Optimize your LinkedIn profile to attract Egyptian recruiters.",
      content: "Your LinkedIn profile is your digital business card. Make it shine...",
      category: "Online Presence",
      readTime: "4 min read",
      detailedContent: {
        introduction: "LinkedIn has become increasingly important in the Egyptian job market, with more recruiters and employers using the platform to find and evaluate candidates. A well-optimized LinkedIn profile can significantly increase your visibility and attract better job opportunities.",
        sections: [
          {
            title: "Profile Fundamentals",
            content: "Your LinkedIn profile serves as your digital resume and first impression. Ensuring the basics are perfect creates a strong foundation for attracting recruiters and opportunities.",
            tips: [
              "Use a professional headshot that clearly shows your face",
              "Write a compelling headline that goes beyond just your job title",
              "Create a summary that highlights your unique value proposition",
              "Include your location as Cairo, Egypt (or your specific city) to appear in local searches",
              "Ensure your contact information is up-to-date and professional"
            ]
          },
          {
            title: "Content Strategy for Egyptian Market",
            content: "Creating and sharing relevant content helps establish your expertise and keeps you visible in your network's feeds, which is particularly important in the Egyptian professional community.",
            tips: [
              "Share insights about your industry and the Egyptian market",
              "Engage with posts from Egyptian companies and thought leaders",
              "Write articles about challenges and opportunities in your field",
              "Share relevant news and add your professional perspective",
              "Use both English and Arabic content to reach a broader audience"
            ]
          },
          {
            title: "Network Building and Engagement",
            content: "Your LinkedIn network should reflect your professional relationships and industry connections. Active engagement helps maintain visibility and build new relationships.",
            tips: [
              "Connect with colleagues, clients, and industry professionals in Egypt",
              "Join Egyptian professional groups and industry associations",
              "Participate in discussions and comment thoughtfully on others' posts",
              "Congratulate connections on their achievements and career moves",
              "Share opportunities and useful information with your network"
            ]
          },
          {
            title: "Optimizing for Recruiter Searches",
            content: "Egyptian recruiters use specific search criteria when looking for candidates. Optimizing your profile for these searches increases your chances of being discovered.",
            tips: [
              "Include relevant keywords throughout your profile, especially in your headline and summary",
              "List specific skills that are in demand in your industry",
              "Get endorsements and recommendations from Egyptian colleagues and supervisors",
              "Keep your profile updated with recent achievements and job changes",
              "Set your profile to signal that you're open to opportunities when appropriate"
            ]
          }
        ],
        keyTakeaways: [
          "A complete, professional LinkedIn profile is essential in today's Egyptian job market",
          "Regular content sharing and engagement increase your visibility to recruiters",
          "Keywords and skills optimization help you appear in relevant recruiter searches",
          "Building a strong network of Egyptian professionals opens more opportunities",
          "Consistent activity and profile updates keep you top-of-mind for opportunities"
        ],
        actionSteps: [
          "Update your profile photo and headline to be more compelling",
          "Write or revise your LinkedIn summary to highlight your unique value",
          "Connect with 10 new Egyptian professionals in your industry each week",
          "Share at least one relevant article or insight per week",
          "Request recommendations from recent colleagues or supervisors"
        ]
      }
    },
    {
      id: 6,
      title: "Industry Insights",
      icon: "📊",
      description: "Stay updated with the latest trends in Egypt's job market.",
      content: "Understanding market trends gives you a competitive edge...",
      category: "Market Trends",
      readTime: "10 min read",
      detailedContent: {
        introduction: "Egypt's job market is rapidly evolving, driven by economic reforms, technological advancement, and changing industry demands. Staying informed about these trends is crucial for making strategic career decisions and positioning yourself for future opportunities.",
        sections: [
          {
            title: "Growing Industries and Sectors",
            content: "Several industries in Egypt are experiencing significant growth, creating new opportunities for professionals with the right skills and experience.",
            tips: [
              "Technology and fintech sectors are rapidly expanding with government digital transformation initiatives",
              "Renewable energy projects are creating opportunities in engineering and project management",
              "Tourism and hospitality are recovering and modernizing post-pandemic",
              "Healthcare and pharmaceuticals continue to grow with increasing demand",
              "E-commerce and digital marketing are booming with changing consumer behavior"
            ]
          },
          {
            title: "In-Demand Skills and Competencies",
            content: "The Egyptian job market increasingly values specific technical and soft skills. Developing these competencies can significantly improve your career prospects.",
            tips: [
              "Digital literacy and data analysis skills are essential across all industries",
              "Project management certification (PMP, Agile) is highly valued",
              "Foreign language skills, especially English and German, open international opportunities",
              "Leadership and team management abilities are crucial for career advancement",
              "Adaptability and change management skills are increasingly important"
            ]
          },
          {
            title: "Remote Work and Flexible Arrangements",
            content: "The pandemic has accelerated the adoption of flexible work arrangements in Egypt, creating new opportunities and changing employer expectations.",
            tips: [
              "Many companies now offer hybrid or remote work options",
              "Strong communication and self-management skills are essential for remote work",
              "International remote opportunities are becoming more accessible to Egyptian professionals",
              "Digital collaboration tools proficiency is now a basic requirement",
              "Work-life balance is becoming a more important factor in job decisions"
            ]
          },
          {
            title: "Economic Factors Affecting Employment",
            content: "Understanding broader economic trends helps you make informed career decisions and anticipate market changes that might affect your industry.",
            tips: [
              "Government economic reforms are creating new business opportunities",
              "Foreign investment is increasing in certain sectors, creating job opportunities",
              "Currency fluctuations affect salary negotiations and compensation packages",
              "Infrastructure development projects are driving demand in construction and engineering",
              "The New Administrative Capital is creating opportunities in various sectors"
            ]
          }
        ],
        keyTakeaways: [
          "Egypt's job market is diversifying with growth in technology, renewable energy, and healthcare",
          "Digital skills and adaptability are becoming essential across all industries",
          "Remote and flexible work arrangements are becoming more common and accepted",
          "Understanding economic trends helps you make strategic career decisions",
          "Continuous learning and skill development are crucial for staying competitive"
        ],
        actionSteps: [
          "Identify which growing industries align with your skills and interests",
          "Assess your current skills against market demands and identify gaps",
          "Consider pursuing relevant certifications or training programs",
          "Subscribe to industry newsletters and follow Egyptian business news",
          "Network with professionals in growing industries to learn about opportunities"
        ]
      }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const tipId = parseInt(params['id']);
      this.currentTip = this.tips.find(tip => tip.id === tipId) || null;
      
      if (this.currentTip) {
        // Get related tips from the same category, excluding current tip
        this.relatedTips = this.tips
          .filter(tip => tip.category === this.currentTip!.category && tip.id !== this.currentTip!.id)
          .slice(0, 3);
      }
    });
  }

  navigateToTip(tipId: number) {
    this.router.navigate(['/career-tips', tipId]);
  }

  goBack() {
    this.router.navigate(['/career-tips']);
  }
}
