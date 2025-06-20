import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../shared/footer.component';
import { HeaderSingleComponent } from '../shared/header-single.component';


@Component({
  selector: 'app-register-minimal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FooterComponent, HeaderSingleComponent],
  templateUrl: './register-minimal.component.html',
  styleUrl: './register-minimal.component.css'
})
export class RegisterMinimalComponent {
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
      email: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[0-9]{10,15}$/)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      
      // Additional Fields
      preferredJob: [''], // Required preferred job title
      highestEducation: [''] // Required highest education
    });  }

  educationLevels = [
    'High School',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Professional Certification',
    'Other'
  ];

  // Job preferences for the preferred job title field
  jobPreferences = [
    'Software Developer',
    'Data Scientist',
    'Digital Marketing Specialist',
    'Project Manager',
    'Sales Representative',
    'Customer Service Representative',
    'HR Specialist',
    'Financial Analyst',
    'Graphic Designer',
    'Mechanical Engineer',
    'Nurse',
    'Teacher',
    'Research Analyst',
    'Operations Manager',
    'Business Analyst',
    'UI/UX Designer',
    'Marketing Manager',
    'Product Manager',
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
