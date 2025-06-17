import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../shared/footer.component';
import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FooterComponent, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedFile: File | null = null;
  dragOver = false;
  isSubmitting = false;
  submissionSuccess = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // Personal Information
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[0-9]{10,15}$/)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      
      // Location
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      
      // Professional Information
      currentTitle: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      industry: ['', Validators.required],
      skills: ['', Validators.required],
      languages: ['', Validators.required],
      
      // Optional Fields
      preferredJob: [''], // Optional preferred job
      highestEducation: [''], // Optional highest education
      
      // Additional
      portfolio: [''],
      linkedin: [''],
      summary: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  governorates = [
    'Cairo', 'Alexandria', 'Giza', 'Sharkia', 'Dakahlia', 'Beheira', 
    'Kafr El Sheikh', 'Gharbia', 'Monufia', 'Qalyubia', 'Ismailia',
    'Suez', 'Port Said', 'Damietta', 'North Sinai', 'South Sinai',
    'Red Sea', 'Luxor', 'Aswan', 'Sohag', 'Qena', 'Asyut', 'Minya',
    'Beni Suef', 'Fayoum', 'New Valley'
  ];

  industries = [
    'Technology & IT', 'Banking & Finance', 'Healthcare', 'Education',
    'Manufacturing', 'Retail & E-commerce', 'Real Estate', 'Telecommunications',
    'Media & Advertising', 'Tourism & Hospitality', 'Engineering',
    'Oil & Gas', 'Construction', 'Agriculture', 'Transportation',
    'Consulting', 'Legal', 'Non-Profit', 'Government', 'Other'
  ];

  experienceLevels = [
    'Fresh Graduate (0-1 years)',
    'Junior (1-3 years)',
    'Mid-Level (3-5 years)',
    'Senior (5-8 years)',
    'Lead/Manager (8-12 years)',
    'Executive (12+ years)'
  ];

  educationLevels = [
    'High School',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Professional Certification'  ];

  // Job preferences for the optional field
  jobPreferences = [
    'Software Development',
    'Data Science',
    'Digital Marketing',
    'Project Management',
    'Sales',
    'Customer Service',
    'Human Resources',
    'Finance & Accounting',
    'Design & Creative',
    'Engineering',
    'Healthcare',
    'Education',
    'Research',
    'Operations',
    'Other'
  ];

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
    
    const files = event.dataTransfer?.files;
    if (files && files[0] && files[0].type === 'application/pdf') {
      this.selectedFile = files[0];
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      
      const formData = new FormData();
      
      // Add form data
      Object.keys(this.registerForm.value).forEach(key => {
        formData.append(key, this.registerForm.value[key]);
      });
      
      // Add CV file
      if (this.selectedFile) {
        formData.append('cv', this.selectedFile);
      }
      
      console.log('Form submitted:', this.registerForm.value);
      console.log('CV file:', this.selectedFile);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submissionSuccess = true;
        
        // Show success message for 3 seconds, then redirect
        setTimeout(() => {
          alert('Registration successful! We will review your profile and get back to you soon.');
          // You could navigate to a success page here
          // this.router.navigate(['/success']);
        }, 2000);      }, 2000);
    }
  }
}
