import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/app.service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablePaginationComponent } from '../../shared/table-pagination/table-pagination.component';
@Component({
  selector: 'app-multi-pridiction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    MatTabsModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    TablePaginationComponent
  ],
  templateUrl: './multi-pridiction-form.component.html',
  styleUrl: './multi-pridiction-form.component.css'
})
export class MultiPridictionFormComponent {

  displayedColumns: string[] = ['serialNo', 'Bid Type Encoded', 'Boosted Encoded', 'Probability (%)', 'Year'];

  probability: number = 0;
  spinnerSubmit = false;
  showPopup: boolean = false;
  submitted = false;
  title = 'upwork-detail';
  jobForm: FormGroup;
  apiResponse: any = {}; // Holds API response data
  trueData: any[] = []; // Data for 'true' tab
  falseData: any[] = []; // Data for 'false' tab
  errorMessage: any;
  trueDataCount: any = 0;
  falseDataCount: any = 0;
  
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.jobForm = this.fb.group({
      sheet_url: ['', Validators.required],
    });
  }

  onSubmit() {
    this.errorMessage = '';
    this.submitted = true;
    if (this.jobForm.valid) {
      this.spinnerSubmit = true;
      const payload = {
        "sheet_url": this.jobForm.value.sheet_url
      };
      this.apiService.predict(payload).subscribe({
        next: (response) => {
          this.apiResponse = response.data;
          this.trueData = response.data.true.data;
          this.trueDataCount = response.data.true.count;
          this.falseData = response.data.false.data;
          this.falseDataCount = response.data.false.count;          
          this.spinnerSubmit = false;
        },
        error: (error) => {
          if (error.error && error.error.message) {
            console.error('Error message:', error.error.message);
            this.errorMessage = error.error.message;
          } else {
            console.error('Unknown error occurred');
            this.errorMessage = 'An unknown error occurred. Please try again later.';
          }
          this.spinnerSubmit = false;
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


