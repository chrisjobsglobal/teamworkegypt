import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../shared/footer.component';
import { HeaderSingleComponent } from '../shared/header-single.component';
import { UploadCvService, UploadCvResponse, CvJson } from '../_core/services/upload-cv.service';
import { SaveApplicantService } from '../_core/services/save-applicant.service';
import { take } from 'rxjs/operators';
import { signal } from '@angular/core';

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
  isSubmitting = signal(false);
  submissionSuccess = signal(false);
  uploadCvService = inject(UploadCvService);
  saveApplicantService = inject(SaveApplicantService);

  currentUserId = ''

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
      preferredJob: ['', [Validators.required, Validators.minLength(4)]], 
      highestEducation: ['', [Validators.required, Validators.minLength(4)]], 
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
    if (file && this.isAcceptedFileType(file)) {
      this.selectedFile = file;
      this.uploadAndPrefillCv(file);
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
    if (files && files[0] && this.isAcceptedFileType(files[0])) {
      this.selectedFile = files[0];
      this.uploadAndPrefillCv(files[0]);
    }
  }

  isAcceptedFileType(file: File): boolean {
    const acceptedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword', // .doc
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/gif',
      'image/bmp',
      'image/webp'
    ];
    return acceptedTypes.includes(file.type);
  }

  uploadAndPrefillCv(file: File) {
    this.isSubmitting.set(true);
    this.uploadCvService.uploadCv(file).pipe(take(1)).subscribe({
      next: (res: UploadCvResponse) => {
        this.isSubmitting.set(false);
        if (res.status === 'success' && res.data && res.data.cv_json) {
          this.prefillForm(res.data.cv_json);
        }
        this.currentUserId = res.user.user_id || '';
      },
      error: () => {
        this.isSubmitting.set(false);
        // Optionally show error message
      }
    });
  }

  prefillForm(cv: CvJson) {

    const highestEducation = cv.education && cv.education.length > 0 ? cv.education[0].degree : '';

    this.registerForm.patchValue({
      firstName: cv.first_name || '',
      lastName: cv.last_name || '',
      email: cv.email || '',
      phone: cv.phone || '',
      dateOfBirth: cv.date_of_birth || '',
      gender: cv.gender || '',
      preferredJob: (cv.job_types && cv.job_types.length > 0) ? cv.job_types[0] : '',
      highestEducation: highestEducation
    });

    // Mark all controls as touched and update validity
    Object.keys(this.registerForm.controls).forEach(key => {
      this.registerForm.get(key)?.markAsTouched();
      this.registerForm.get(key)?.updateValueAndValidity();
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isSubmitting.set(true);
      const formData = new FormData();
      Object.keys(this.registerForm.value).forEach(key => {
        formData.append(key, this.registerForm.value[key]);
      });
      formData.append('user_id', this.currentUserId || '');
      this.saveApplicantService.saveApplicant(formData).pipe(take(1)).subscribe({
        next: (res) => {
          this.isSubmitting.set(false);
          this.submissionSuccess.set(true);
          console.log('submit stat: ', this.submissionSuccess())
        },
        error: () => {
          this.isSubmitting.set(false);
          alert('There was an error submitting your application. Please try again.');
        }
      });
    }
  }
}
