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
      title: $localize`:@@career-tip-1-title:Perfect Your Resume`,
      icon: "📄",
      description: $localize`:@@career-tip-1-description:Learn how to create a compelling resume that stands out to Egyptian employers.`,
      content: $localize`:@@career-tip-1-content:Your resume is your first impression. Make it count with these essential tips...`,
      category: $localize`:@@career-tip-1-category:Resume`,
      readTime: $localize`:@@career-tip-1-readtime:5 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-1-introduction:Your resume is often the first point of contact with potential employers in Egypt. In a competitive job market, having a well-crafted resume can make the difference between landing an interview and being overlooked. This comprehensive guide will help you create a resume that not only meets Egyptian employer expectations but exceeds them.`,
        sections: [
          {
            title: $localize`:@@career-tip-1-section-1-title:Essential Resume Structure`,
            content: $localize`:@@career-tip-1-section-1-content:Egyptian employers typically prefer a clear, professional structure that highlights your qualifications efficiently. Your resume should follow a logical flow that makes it easy for hiring managers to find the information they need.`,
            tips: [
              $localize`:@@career-tip-1-section-1-tip-1:Start with a professional header including your name, phone number, email, and LinkedIn profile`,
              $localize`:@@career-tip-1-section-1-tip-2:Include a brief professional summary (2-3 lines) highlighting your key strengths`,
              $localize`:@@career-tip-1-section-1-tip-3:List your work experience in reverse chronological order`,
              $localize`:@@career-tip-1-section-1-tip-4:Include relevant education, certifications, and skills`,
              $localize`:@@career-tip-1-section-1-tip-5:Keep it to 2 pages maximum for most positions`
            ]
          },
          {
            title: $localize`:@@career-tip-1-section-2-title:Tailoring for Egyptian Market`,
            content: $localize`:@@career-tip-1-section-2-content:Understanding the local job market preferences is crucial for success. Egyptian employers often value specific qualifications and experiences that may differ from international standards.`,
            tips: [
              $localize`:@@career-tip-1-section-2-tip-1:Include your nationality if you're Egyptian (preferred by many local companies)`,
              $localize`:@@career-tip-1-section-2-tip-2:Mention your military service status if applicable (for male candidates)`,
              $localize`:@@career-tip-1-section-2-tip-3:Highlight any experience with local companies or understanding of the Egyptian market`,
              $localize`:@@career-tip-1-section-2-tip-4:Include relevant language skills (Arabic, English, French, etc.)`,
              $localize`:@@career-tip-1-section-2-tip-5:Consider including a professional photo if common in your industry`
            ]
          },
          {
            title: $localize`:@@career-tip-1-section-3-title:Content Optimization`,
            content: $localize`:@@career-tip-1-section-3-content:The content of your resume should tell a compelling story of your professional journey while highlighting achievements that matter to Egyptian employers.`,
            tips: [
              $localize`:@@career-tip-1-section-3-tip-1:Use action verbs to describe your accomplishments`,
              $localize`:@@career-tip-1-section-3-tip-2:Quantify your achievements with specific numbers and percentages`,
              $localize`:@@career-tip-1-section-3-tip-3:Focus on results and impact rather than just job duties`,
              $localize`:@@career-tip-1-section-3-tip-4:Include relevant keywords from the job description`,
              $localize`:@@career-tip-1-section-3-tip-5:Highlight any cost savings, revenue generation, or process improvements`
            ]
          },
          {
            title: $localize`:@@career-tip-1-section-4-title:Common Mistakes to Avoid`,
            content: $localize`:@@career-tip-1-section-4-content:Many candidates make critical errors that can immediately disqualify them from consideration. Being aware of these pitfalls can give you a significant advantage.`,
            tips: [
              $localize`:@@career-tip-1-section-4-tip-1:Don't include personal information like marital status or age (unless specifically requested)`,
              $localize`:@@career-tip-1-section-4-tip-2:Avoid using unprofessional email addresses`,
              $localize`:@@career-tip-1-section-4-tip-3:Don't list irrelevant work experience or hobbies`,
              $localize`:@@career-tip-1-section-4-tip-4:Ensure there are no spelling or grammatical errors`,
              $localize`:@@career-tip-1-section-4-tip-5:Don't use overly complex formatting that may not display properly in applicant tracking systems`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-1-takeaway-1:A well-structured resume should tell your professional story clearly and concisely`,
          $localize`:@@career-tip-1-takeaway-2:Tailor your resume to match Egyptian market expectations and job requirements`,
          $localize`:@@career-tip-1-takeaway-3:Focus on quantifiable achievements rather than just listing responsibilities`,
          $localize`:@@career-tip-1-takeaway-4:Keep formatting clean and professional while ensuring ATS compatibility`,
          $localize`:@@career-tip-1-takeaway-5:Always proofread and have someone else review your resume before submitting`
        ],
        actionSteps: [
          $localize`:@@career-tip-1-action-1:Review your current resume and identify areas for improvement`,
          $localize`:@@career-tip-1-action-2:Research the specific company and role you're applying for`,
          $localize`:@@career-tip-1-action-3:Customize your resume for each application`,
          $localize`:@@career-tip-1-action-4:Ask for feedback from professionals in your industry`,
          $localize`:@@career-tip-1-action-5:Keep your resume updated with recent achievements and skills`
        ]
      }
    },    {
      id: 2,
      title: $localize`:@@career-tip-2-title:Master the Interview`,
      icon: "🎯",
      description: $localize`:@@career-tip-2-description:Essential interview tips and common questions asked by Egyptian companies.`,
      content: $localize`:@@career-tip-2-content:Preparation is key to interview success. Here's what you need to know...`,
      category: $localize`:@@career-tip-2-category:Interview`,
      readTime: $localize`:@@career-tip-2-readtime:7 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-2-introduction:Job interviews in Egypt often follow specific cultural and professional norms that can significantly impact your success. Understanding these expectations and preparing accordingly can dramatically improve your chances of landing the job you want.`,
        sections: [
          {
            title: $localize`:@@career-tip-2-section-1-title:Pre-Interview Preparation`,
            content: $localize`:@@career-tip-2-section-1-content:Thorough preparation is the foundation of interview success. Egyptian employers appreciate candidates who have taken the time to understand their company and the role.`,
            tips: [
              $localize`:@@career-tip-2-section-1-tip-1:Research the company's history, values, and recent developments`,
              $localize`:@@career-tip-2-section-1-tip-2:Understand the job requirements and prepare specific examples of relevant experience`,
              $localize`:@@career-tip-2-section-1-tip-3:Prepare thoughtful questions about the role and company culture`,
              $localize`:@@career-tip-2-section-1-tip-4:Practice common interview questions with friends or family`,
              $localize`:@@career-tip-2-section-1-tip-5:Plan your route to the interview location and arrive 10-15 minutes early`
            ]
          },
          {
            title: $localize`:@@career-tip-2-section-2-title:Common Interview Questions in Egypt`,
            content: $localize`:@@career-tip-2-section-2-content:While each interview is unique, certain questions appear frequently in Egyptian job interviews. Being prepared for these can boost your confidence and performance.`,
            tips: [
              $localize`:@@career-tip-2-section-2-tip-1:'Tell me about yourself' - Prepare a 2-minute professional summary`,
              $localize`:@@career-tip-2-section-2-tip-2:'Why do you want to work for our company?' - Show genuine interest and knowledge`,
              $localize`:@@career-tip-2-section-2-tip-3:'What are your salary expectations?' - Research market rates beforehand`,
              $localize`:@@career-tip-2-section-2-tip-4:'Where do you see yourself in 5 years?' - Demonstrate ambition and planning`,
              $localize`:@@career-tip-2-section-2-tip-5:'Why are you leaving your current job?' - Stay positive and professional`
            ]
          },
          {
            title: $localize`:@@career-tip-2-section-3-title:Cultural Considerations`,
            content: $localize`:@@career-tip-2-section-3-content:Understanding Egyptian business culture can help you make a positive impression and avoid potential misunderstandings during your interview.`,
            tips: [
              $localize`:@@career-tip-2-section-3-tip-1:Dress conservatively and professionally (formal business attire is preferred)`,
              $localize`:@@career-tip-2-section-3-tip-2:Greet interviewers with a firm handshake and maintain respectful eye contact`,
              $localize`:@@career-tip-2-section-3-tip-3:Show respect for hierarchy - address senior staff with appropriate titles`,
              $localize`:@@career-tip-2-section-3-tip-4:Be patient if the interview starts later than scheduled`,
              $localize`:@@career-tip-2-section-3-tip-5:Express appreciation for the interviewer's time at the end of the meeting`
            ]
          },
          {
            title: $localize`:@@career-tip-2-section-4-title:Demonstrating Your Value`,
            content: $localize`:@@career-tip-2-section-4-content:Egyptian employers want to see concrete evidence of your ability to contribute to their organization's success. Use specific examples to showcase your skills.`,
            tips: [
              $localize`:@@career-tip-2-section-4-tip-1:Use the STAR method (Situation, Task, Action, Result) to structure your answers`,
              $localize`:@@career-tip-2-section-4-tip-2:Provide specific examples of problems you've solved or goals you've achieved`,
              $localize`:@@career-tip-2-section-4-tip-3:Highlight any experience working in the Egyptian market or with local clients`,
              $localize`:@@career-tip-2-section-4-tip-4:Demonstrate your understanding of local business practices and challenges`,
              $localize`:@@career-tip-2-section-4-tip-5:Show enthusiasm for contributing to the company's growth and success`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-2-takeaway-1:Preparation and research are critical for interview success in Egypt`,
          $localize`:@@career-tip-2-takeaway-2:Understanding local business culture helps you make a positive impression`,
          $localize`:@@career-tip-2-takeaway-3:Use specific examples and the STAR method to demonstrate your capabilities`,
          $localize`:@@career-tip-2-takeaway-4:Professional appearance and respectful behavior are highly valued`,
          $localize`:@@career-tip-2-takeaway-5:Ask thoughtful questions to show genuine interest in the role and company`
        ],
        actionSteps: [
          $localize`:@@career-tip-2-action-1:Practice answering common interview questions out loud`,
          $localize`:@@career-tip-2-action-2:Research the company thoroughly before each interview`,
          $localize`:@@career-tip-2-action-3:Prepare specific examples that demonstrate your skills and achievements`,
          $localize`:@@career-tip-2-action-4:Plan your interview outfit and ensure it's appropriate for the company culture`,
          $localize`:@@career-tip-2-action-5:Follow up with a thank-you email within 24 hours of the interview`
        ]
      }
    },    {
      id: 3,
      title: $localize`:@@career-tip-3-title:Networking in Egypt`,
      icon: "🤝",
      description: $localize`:@@career-tip-3-description:Build professional relationships that can accelerate your career growth.`,
      content: $localize`:@@career-tip-3-content:Networking is crucial in the Egyptian job market. Learn effective strategies...`,
      category: $localize`:@@career-tip-3-category:Networking`,
      readTime: $localize`:@@career-tip-3-readtime:6 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-3-introduction:In Egypt's relationship-driven business culture, networking isn't just helpful—it's essential. Building strong professional relationships can open doors to opportunities that might never be publicly advertised and provide valuable insights into your industry.`,
        sections: [
          {
            title: $localize`:@@career-tip-3-section-1-title:Understanding Egyptian Business Networks`,
            content: $localize`:@@career-tip-3-section-1-content:Egyptian professional networks often blend personal and business relationships, creating unique opportunities for career advancement. Understanding these dynamics is key to effective networking.`,
            tips: [
              $localize`:@@career-tip-3-section-1-tip-1:Attend industry events, conferences, and professional association meetings`,
              $localize`:@@career-tip-3-section-1-tip-2:Join local business groups and chambers of commerce`,
              $localize`:@@career-tip-3-section-1-tip-3:Participate in university alumni networks and events`,
              $localize`:@@career-tip-3-section-1-tip-4:Engage with professional groups on social media platforms`,
              $localize`:@@career-tip-3-section-1-tip-5:Consider joining rotary clubs or other service organizations`
            ]
          },
          {
            title: $localize`:@@career-tip-3-section-2-title:Building Authentic Relationships`,
            content: $localize`:@@career-tip-3-section-2-content:Successful networking in Egypt is about building genuine relationships rather than simply collecting contacts. Focus on creating meaningful connections that benefit both parties.`,
            tips: [
              $localize`:@@career-tip-3-section-2-tip-1:Show genuine interest in others' work and challenges`,
              $localize`:@@career-tip-3-section-2-tip-2:Offer help and support without expecting immediate returns`,
              $localize`:@@career-tip-3-section-2-tip-3:Follow up consistently with new contacts`,
              $localize`:@@career-tip-3-section-2-tip-4:Share relevant opportunities and information with your network`,
              $localize`:@@career-tip-3-section-2-tip-5:Maintain relationships even when you're not actively job searching`
            ]
          },
          {
            title: $localize`:@@career-tip-3-section-3-title:Leveraging Digital Platforms`,
            content: $localize`:@@career-tip-3-section-3-content:While face-to-face networking remains important in Egypt, digital platforms offer additional opportunities to expand your professional network and stay connected.`,
            tips: [
              $localize`:@@career-tip-3-section-3-tip-1:Optimize your LinkedIn profile for the Egyptian market`,
              $localize`:@@career-tip-3-section-3-tip-2:Join industry-specific groups on LinkedIn and Facebook`,
              $localize`:@@career-tip-3-section-3-tip-3:Share relevant content and engage with others' posts`,
              $localize`:@@career-tip-3-section-3-tip-4:Connect with colleagues, clients, and industry professionals online`,
              $localize`:@@career-tip-3-section-3-tip-5:Use platforms like Wuzzuf and Bayt to connect with recruiters`
            ]
          },
          {
            title: $localize`:@@career-tip-3-section-4-title:Networking Etiquette and Best Practices`,
            content: $localize`:@@career-tip-3-section-4-content:Effective networking requires understanding and respecting cultural norms while building professional relationships that can last throughout your career.`,
            tips: [
              $localize`:@@career-tip-3-section-4-tip-1:Always be respectful and professional in all interactions`,
              $localize`:@@career-tip-3-section-4-tip-2:Remember personal details about your contacts (family, interests, etc.)`,
              $localize`:@@career-tip-3-section-4-tip-3:Offer value before asking for favors`,
              $localize`:@@career-tip-3-section-4-tip-4:Be patient - relationship building takes time in Egyptian culture`,
              $localize`:@@career-tip-3-section-4-tip-5:Express gratitude and acknowledge help you receive from your network`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-3-takeaway-1:Networking is relationship-driven in Egypt and requires genuine connection`,
          $localize`:@@career-tip-3-takeaway-2:Mix traditional face-to-face networking with digital platform engagement`,
          $localize`:@@career-tip-3-takeaway-3:Focus on giving value to others rather than just seeking personal benefit`,
          $localize`:@@career-tip-3-takeaway-4:Consistency in maintaining relationships is crucial for long-term success`,
          $localize`:@@career-tip-3-takeaway-5:Cultural sensitivity and respect are essential in all networking activities`
        ],
        actionSteps: [
          $localize`:@@career-tip-3-action-1:Identify key industry events and professional associations to join`,
          $localize`:@@career-tip-3-action-2:Update your LinkedIn profile and start engaging with relevant content`,
          $localize`:@@career-tip-3-action-3:Reach out to 3-5 new professional contacts each month`,
          $localize`:@@career-tip-3-action-4:Schedule regular coffee meetings with existing contacts`,
          $localize`:@@career-tip-3-action-5:Create a system to track and maintain your professional relationships`
        ]
      }
    },    {
      id: 4,
      title: $localize`:@@career-tip-4-title:Salary Negotiation`,
      icon: "💰",
      description: $localize`:@@career-tip-4-description:How to negotiate your salary and benefits package confidently.`,
      content: $localize`:@@career-tip-4-content:Don't leave money on the table. Master the art of salary negotiation...`,
      category: $localize`:@@career-tip-4-category:Negotiation`,
      readTime: $localize`:@@career-tip-4-readtime:8 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-4-introduction:Salary negotiation in Egypt requires a delicate balance of confidence, market knowledge, and cultural sensitivity. Many professionals leave money on the table simply because they don't know how to effectively negotiate their compensation package.`,
        sections: [
          {
            title: $localize`:@@career-tip-4-section-1-title:Market Research and Preparation`,
            content: $localize`:@@career-tip-4-section-1-content:Before entering any salary negotiation, you need to understand your worth in the Egyptian job market. This knowledge forms the foundation of your negotiation strategy.`,
            tips: [
              $localize`:@@career-tip-4-section-1-tip-1:Research salary ranges for your position using platforms like Bayt, Wuzzuf, and Glassdoor`,
              $localize`:@@career-tip-4-section-1-tip-2:Consider the company size, industry, and location when evaluating offers`,
              $localize`:@@career-tip-4-section-1-tip-3:Factor in the total compensation package, not just base salary`,
              $localize`:@@career-tip-4-section-1-tip-4:Understand the economic climate and industry growth trends`,
              $localize`:@@career-tip-4-section-1-tip-5:Know your minimum acceptable offer before negotiations begin`
            ]
          },
          {
            title: $localize`:@@career-tip-4-section-2-title:Timing Your Negotiation`,
            content: $localize`:@@career-tip-4-section-2-content:Knowing when and how to bring up salary discussions can significantly impact the outcome. Timing is crucial in Egyptian business culture.`,
            tips: [
              $localize`:@@career-tip-4-section-2-tip-1:Wait for the employer to make the first offer when possible`,
              $localize`:@@career-tip-4-section-2-tip-2:Negotiate after receiving a job offer, not during early interviews`,
              $localize`:@@career-tip-4-section-2-tip-3:Consider negotiating salary during performance reviews if you're already employed`,
              $localize`:@@career-tip-4-section-2-tip-4:Avoid salary discussions during Ramadan or other culturally sensitive periods`,
              $localize`:@@career-tip-4-section-2-tip-5:Choose appropriate timing when your supervisor is likely to be receptive`
            ]
          },
          {
            title: $localize`:@@career-tip-4-section-3-title:Negotiation Strategies and Tactics`,
            content: $localize`:@@career-tip-4-section-3-content:Effective salary negotiation requires a strategic approach that considers both your needs and the employer's constraints while maintaining professional relationships.`,
            tips: [
              $localize`:@@career-tip-4-section-3-tip-1:Present your case based on your value and contributions to the organization`,
              $localize`:@@career-tip-4-section-3-tip-2:Use market data to support your salary expectations`,
              $localize`:@@career-tip-4-section-3-tip-3:Consider negotiating benefits if salary flexibility is limited`,
              $localize`:@@career-tip-4-section-3-tip-4:Be prepared to justify why you deserve the increase you're requesting`,
              $localize`:@@career-tip-4-section-3-tip-5:Maintain a collaborative rather than confrontational tone throughout`
            ]
          },
          {
            title: $localize`:@@career-tip-4-section-4-title:Beyond Base Salary: Total Compensation`,
            content: $localize`:@@career-tip-4-section-4-content:In Egypt, the total compensation package often includes various benefits that can significantly increase your overall compensation even if base salary increases are limited.`,
            tips: [
              $localize`:@@career-tip-4-section-4-tip-1:Negotiate health insurance coverage for family members`,
              $localize`:@@career-tip-4-section-4-tip-2:Discuss transportation allowances or company car benefits`,
              $localize`:@@career-tip-4-section-4-tip-3:Consider flexible working arrangements or additional vacation time`,
              $localize`:@@career-tip-4-section-4-tip-4:Explore professional development and training opportunities`,
              $localize`:@@career-tip-4-section-4-tip-5:Discuss performance bonuses and annual salary review schedules`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-4-takeaway-1:Thorough market research is essential before any salary negotiation`,
          $localize`:@@career-tip-4-takeaway-2:Timing and cultural sensitivity can significantly impact negotiation success`,
          $localize`:@@career-tip-4-takeaway-3:Focus on your value and contributions rather than personal financial needs`,
          $localize`:@@career-tip-4-takeaway-4:Consider the total compensation package, not just base salary`,
          $localize`:@@career-tip-4-takeaway-5:Maintain professionalism and positive relationships throughout the process`
        ],
        actionSteps: [
          $localize`:@@career-tip-4-action-1:Research current market rates for your position and experience level`,
          $localize`:@@career-tip-4-action-2:Document your achievements and contributions to the organization`,
          $localize`:@@career-tip-4-action-3:Practice your negotiation conversation with trusted friends or mentors`,
          $localize`:@@career-tip-4-action-4:Prepare to discuss alternative benefits if salary increases aren't possible`,
          $localize`:@@career-tip-4-action-5:Plan your ideal outcome and minimum acceptable terms before negotiating`
        ]
      }
    },    {
      id: 5,
      title: $localize`:@@career-tip-5-title:LinkedIn Optimization`,
      icon: "💼",
      description: $localize`:@@career-tip-5-description:Optimize your LinkedIn profile to attract Egyptian recruiters.`,
      content: $localize`:@@career-tip-5-content:Your LinkedIn profile is your digital business card. Make it shine...`,
      category: $localize`:@@career-tip-5-category:Online Presence`,
      readTime: $localize`:@@career-tip-5-readtime:4 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-5-introduction:LinkedIn has become increasingly important in the Egyptian job market, with more recruiters and employers using the platform to find and evaluate candidates. A well-optimized LinkedIn profile can significantly increase your visibility and attract better job opportunities.`,
        sections: [
          {
            title: $localize`:@@career-tip-5-section-1-title:Profile Fundamentals`,
            content: $localize`:@@career-tip-5-section-1-content:Your LinkedIn profile serves as your digital resume and first impression. Ensuring the basics are perfect creates a strong foundation for attracting recruiters and opportunities.`,
            tips: [
              $localize`:@@career-tip-5-section-1-tip-1:Use a professional headshot that clearly shows your face`,
              $localize`:@@career-tip-5-section-1-tip-2:Write a compelling headline that goes beyond just your job title`,
              $localize`:@@career-tip-5-section-1-tip-3:Create a summary that highlights your unique value proposition`,
              $localize`:@@career-tip-5-section-1-tip-4:Include your location as Cairo, Egypt (or your specific city) to appear in local searches`,
              $localize`:@@career-tip-5-section-1-tip-5:Ensure your contact information is up-to-date and professional`
            ]
          },
          {
            title: $localize`:@@career-tip-5-section-2-title:Content Strategy for Egyptian Market`,
            content: $localize`:@@career-tip-5-section-2-content:Creating and sharing relevant content helps establish your expertise and keeps you visible in your network's feeds, which is particularly important in the Egyptian professional community.`,
            tips: [
              $localize`:@@career-tip-5-section-2-tip-1:Share insights about your industry and the Egyptian market`,
              $localize`:@@career-tip-5-section-2-tip-2:Engage with posts from Egyptian companies and thought leaders`,
              $localize`:@@career-tip-5-section-2-tip-3:Write articles about challenges and opportunities in your field`,
              $localize`:@@career-tip-5-section-2-tip-4:Share relevant news and add your professional perspective`,
              $localize`:@@career-tip-5-section-2-tip-5:Use both English and Arabic content to reach a broader audience`
            ]
          },
          {
            title: $localize`:@@career-tip-5-section-3-title:Network Building and Engagement`,
            content: $localize`:@@career-tip-5-section-3-content:Your LinkedIn network should reflect your professional relationships and industry connections. Active engagement helps maintain visibility and build new relationships.`,
            tips: [
              $localize`:@@career-tip-5-section-3-tip-1:Connect with colleagues, clients, and industry professionals in Egypt`,
              $localize`:@@career-tip-5-section-3-tip-2:Join Egyptian professional groups and industry associations`,
              $localize`:@@career-tip-5-section-3-tip-3:Participate in discussions and comment thoughtfully on others' posts`,
              $localize`:@@career-tip-5-section-3-tip-4:Congratulate connections on their achievements and career moves`,
              $localize`:@@career-tip-5-section-3-tip-5:Share opportunities and useful information with your network`
            ]
          },
          {
            title: $localize`:@@career-tip-5-section-4-title:Optimizing for Recruiter Searches`,
            content: $localize`:@@career-tip-5-section-4-content:Egyptian recruiters use specific search criteria when looking for candidates. Optimizing your profile for these searches increases your chances of being discovered.`,
            tips: [
              $localize`:@@career-tip-5-section-4-tip-1:Include relevant keywords throughout your profile, especially in your headline and summary`,
              $localize`:@@career-tip-5-section-4-tip-2:List specific skills that are in demand in your industry`,
              $localize`:@@career-tip-5-section-4-tip-3:Get endorsements and recommendations from Egyptian colleagues and supervisors`,
              $localize`:@@career-tip-5-section-4-tip-4:Keep your profile updated with recent achievements and job changes`,
              $localize`:@@career-tip-5-section-4-tip-5:Set your profile to signal that you're open to opportunities when appropriate`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-5-takeaway-1:A complete, professional LinkedIn profile is essential in today's Egyptian job market`,
          $localize`:@@career-tip-5-takeaway-2:Regular content sharing and engagement increase your visibility to recruiters`,
          $localize`:@@career-tip-5-takeaway-3:Keywords and skills optimization help you appear in relevant recruiter searches`,
          $localize`:@@career-tip-5-takeaway-4:Building a strong network of Egyptian professionals opens more opportunities`,
          $localize`:@@career-tip-5-takeaway-5:Consistent activity and profile updates keep you top-of-mind for opportunities`
        ],
        actionSteps: [
          $localize`:@@career-tip-5-action-1:Update your profile photo and headline to be more compelling`,
          $localize`:@@career-tip-5-action-2:Write or revise your LinkedIn summary to highlight your unique value`,
          $localize`:@@career-tip-5-action-3:Connect with 10 new Egyptian professionals in your industry each week`,
          $localize`:@@career-tip-5-action-4:Share at least one relevant article or insight per week`,
          $localize`:@@career-tip-5-action-5:Request recommendations from recent colleagues or supervisors`
        ]
      }
    },    {
      id: 6,
      title: $localize`:@@career-tip-6-title:Industry Insights`,
      icon: "📊",
      description: $localize`:@@career-tip-6-description:Stay updated with the latest trends in Egypt's job market.`,
      content: $localize`:@@career-tip-6-content:Understanding market trends gives you a competitive edge...`,
      category: $localize`:@@career-tip-6-category:Market Trends`,
      readTime: $localize`:@@career-tip-6-readtime:10 min read`,      detailedContent: {
        introduction: $localize`:@@career-tip-6-introduction:Egypt's job market is rapidly evolving, driven by economic reforms, technological advancement, and changing industry demands. Staying informed about these trends is crucial for making strategic career decisions and positioning yourself for future opportunities.`,
        sections: [
          {
            title: $localize`:@@career-tip-6-section-1-title:Growing Industries and Sectors`,
            content: $localize`:@@career-tip-6-section-1-content:Several industries in Egypt are experiencing significant growth, creating new opportunities for professionals with the right skills and experience.`,
            tips: [
              $localize`:@@career-tip-6-section-1-tip-1:Technology and fintech sectors are rapidly expanding with government digital transformation initiatives`,
              $localize`:@@career-tip-6-section-1-tip-2:Renewable energy projects are creating opportunities in engineering and project management`,
              $localize`:@@career-tip-6-section-1-tip-3:Tourism and hospitality are recovering and modernizing post-pandemic`,
              $localize`:@@career-tip-6-section-1-tip-4:Healthcare and pharmaceuticals continue to grow with increasing demand`,
              $localize`:@@career-tip-6-section-1-tip-5:E-commerce and digital marketing are booming with changing consumer behavior`
            ]
          },
          {
            title: $localize`:@@career-tip-6-section-2-title:In-Demand Skills and Competencies`,
            content: $localize`:@@career-tip-6-section-2-content:The Egyptian job market increasingly values specific technical and soft skills. Developing these competencies can significantly improve your career prospects.`,
            tips: [
              $localize`:@@career-tip-6-section-2-tip-1:Digital literacy and data analysis skills are essential across all industries`,
              $localize`:@@career-tip-6-section-2-tip-2:Project management certification (PMP, Agile) is highly valued`,
              $localize`:@@career-tip-6-section-2-tip-3:Foreign language skills, especially English and German, open international opportunities`,
              $localize`:@@career-tip-6-section-2-tip-4:Leadership and team management abilities are crucial for career advancement`,
              $localize`:@@career-tip-6-section-2-tip-5:Adaptability and change management skills are increasingly important`
            ]
          },
          {
            title: $localize`:@@career-tip-6-section-3-title:Remote Work and Flexible Arrangements`,
            content: $localize`:@@career-tip-6-section-3-content:The pandemic has accelerated the adoption of flexible work arrangements in Egypt, creating new opportunities and changing employer expectations.`,
            tips: [
              $localize`:@@career-tip-6-section-3-tip-1:Many companies now offer hybrid or remote work options`,
              $localize`:@@career-tip-6-section-3-tip-2:Strong communication and self-management skills are essential for remote work`,
              $localize`:@@career-tip-6-section-3-tip-3:International remote opportunities are becoming more accessible to Egyptian professionals`,
              $localize`:@@career-tip-6-section-3-tip-4:Digital collaboration tools proficiency is now a basic requirement`,
              $localize`:@@career-tip-6-section-3-tip-5:Work-life balance is becoming a more important factor in job decisions`
            ]
          },
          {
            title: $localize`:@@career-tip-6-section-4-title:Economic Factors Affecting Employment`,
            content: $localize`:@@career-tip-6-section-4-content:Understanding broader economic trends helps you make informed career decisions and anticipate market changes that might affect your industry.`,
            tips: [
              $localize`:@@career-tip-6-section-4-tip-1:Government economic reforms are creating new business opportunities`,
              $localize`:@@career-tip-6-section-4-tip-2:Foreign investment is increasing in certain sectors, creating job opportunities`,
              $localize`:@@career-tip-6-section-4-tip-3:Currency fluctuations affect salary negotiations and compensation packages`,
              $localize`:@@career-tip-6-section-4-tip-4:Infrastructure development projects are driving demand in construction and engineering`,
              $localize`:@@career-tip-6-section-4-tip-5:The New Administrative Capital is creating opportunities in various sectors`
            ]
          }
        ],
        keyTakeaways: [
          $localize`:@@career-tip-6-takeaway-1:Egypt's job market is diversifying with growth in technology, renewable energy, and healthcare`,
          $localize`:@@career-tip-6-takeaway-2:Digital skills and adaptability are becoming essential across all industries`,
          $localize`:@@career-tip-6-takeaway-3:Remote and flexible work arrangements are becoming more common and accepted`,
          $localize`:@@career-tip-6-takeaway-4:Understanding economic trends helps you make strategic career decisions`,
          $localize`:@@career-tip-6-takeaway-5:Continuous learning and skill development are crucial for staying competitive`
        ],
        actionSteps: [
          $localize`:@@career-tip-6-action-1:Identify which growing industries align with your skills and interests`,
          $localize`:@@career-tip-6-action-2:Assess your current skills against market demands and identify gaps`,
          $localize`:@@career-tip-6-action-3:Consider pursuing relevant certifications or training programs`,
          $localize`:@@career-tip-6-action-4:Subscribe to industry newsletters and follow Egyptian business news`,
          $localize`:@@career-tip-6-action-5:Network with professionals in growing industries to learn about opportunities`
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
