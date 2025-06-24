import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface CvWorkExperience {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
}

export interface CvEducation {
  degree: string;
  major: string;
  school: string;
  graduation_date: string;
}

export interface CvJson {
  name: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  passport: string;
  passport_expiry: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  civil_status: string;
  gender: string;
  phone: string;
  nationality_iso2: string;
  country_iso2: string;
  city: string;
  location: string;
  availability: string;
  job_level: string;
  industries: string[];
  job_types: string[];
  objectives: string;
  work_experience: CvWorkExperience[];
  education: CvEducation[];
}

export interface CvData {
  photo_url: string | null;
  cv_json: CvJson;
}

export interface UploadCvResponse {
  status: string;
  message: string;
  data: CvData;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class UploadCvService {
  private apiUrl = environment.apiBaseUrl + '/teamworkegypt/upload-cv';

  constructor(private http: HttpClient) {}

  uploadCv(file: File): Observable<UploadCvResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<UploadCvResponse>(this.apiUrl, formData);
  }
}
