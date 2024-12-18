import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/app.service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-multi-pridiction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    MatTabsModule, 
    MatTableModule,
  ],
  templateUrl: './multi-pridiction-form.component.html',
  styleUrl: './multi-pridiction-form.component.css'
})
export class MultiPridictionFormComponent {
  probability: number = 0;
  showPopup: boolean = false;
  title = 'upwork-detail';
  jobForm: FormGroup;
  apiResponse: any = {}; // Holds API response data
  trueData: any[] = []; // Data for 'true' tab
  falseData: any[] = []; // Data for 'false' tab
  
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.jobForm = this.fb.group({
      sheet_url: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const payload = {
        "sheet_url": this.jobForm.value.sheet_url
      };
      this.apiService.predict(payload).subscribe({
        next: (response) => {
          console.log(response);
           // Store the response
          this.apiResponse = response.data;

          // Separate true and false data
          this.trueData = response.data.true.data;
          this.falseData = response.data.false.data;
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  get f() {
    return this.jobForm.controls;
  }

}
