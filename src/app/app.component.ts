import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule, // For formGroup
    CommonModule,
    NgSelectModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'upwork-detail';
  jobForm: FormGroup;
  industries = ["Education / eLearning", "Food & Beverages", "Healthcare", "Information Technology & Services", "Marketplaces", "Others", "Real Estate", "Travel and Hospitality", "Web Development", "eCommerce"];
  technologies = ["AI-ML", "API", "AngularJS", "Buddy Press", "CodeIgniter", "Designing UI/UX", "Flutter", "HTML", "Laravel", "Learn Dash", "Magento 1.X", "Magento 2.X", "Node", "Other", "PHP", "Python", "React Native", "ReactJS", "SEO", "Shopify", "Unknown", "Vue JS", "WooCommerce", "WordPress", "YII"];
  technologyCategories = ["AI-ML", "FullStack", "IOT", "Java", "Magento", "Mobile App", "Open Source eCommerce", "PHP", "Python", "QA", "SEO", "Salesforce", "UI/UX", "Unknown", "WordPress"];
  upworkProfiles = ["Aastha Shrivastava", "Abhilash Sahu", "Abhishek Choudhary", "Abhishek Soni", "Aditya Bhawsar", "Anita Gandhwani", "Anjali Chauhan", "Ankita Yadav", "Apeksha Soni", "Arpit Jain", "Ashish Gavshinde", "Astha Arya", "Astha Jain", "Avinash Malakar", "Bilal masuri", "Chandan Bhanopa", "Chetan Singhal", "Deepak Raheja", "Devendra Barodiya", "Devendra Mallviya", "Gayatri Wadhvani", "Govind namdev", "Govinda Yadav", "Himanshu Jain", "Imran Patel", "Jagannath Prasad Tiwari", "Jaspreet Rajpal", "Jaydeep Chouhan", "Jayesh Patidar", "Jigyasa Sewkani", "Kapil Khandelwal", "Kapil Kothari", "Karishma Solanki", "Lakhan Gehlot", "Mahak Ghumhare", "Manish Pathak", "Manisha Soni", "Manjula Gurjar", "Mayank Jain", "Mayank Mehta", "Megha Sharma", "Mohammad Shadab", "Mohit Navik", "Mohit Upadhyay", "Monika Jain", "Muskan Ved", "Niharika Porwal", "Nikita Sharma", "Nilesh Mahajan", "Nimitt ajmera", "Parth Hinge", "Pooja Chouhan", "Pooja Soliya", "Pragya Patel", "Prajakta Akolkar", "Prakash Sarki", "Pratibha Pandey", "Pratik Baberwal", "Pratik Sharma", "Praveen Verma", "Preeti Mahajan", "Preetibala Mankar", "Prince Bhargav", "Pritesh khandelwal", "Priya Ramnani", "Priya Tomar", "Priyanka Sharma", "Radhika Mantri", "Raj Lashakri", "Rajni Bala Yadav", "Ravikant Verma", "Raviraj Singh", "Rhythm Khandelwal", "Rishabh Diyawar", "Rohit Chitnis", "Rohit Choudhary", "Ruchi Gupta", "Sakhsham Parashar", "Sakshi Gautam", "Saloni Bandi", "Santosh Sekwadiya", "Satyam Hardia", "Shirvashish Thakur", "Shivani Singh Thakur", "Shubham Jaiswal", "Shubham chobey", "Soujanya Gaur", "Sri Ram", "Sumeet Bajaj", "Sunil Jaitly", "Sunil Kansodiya", "Swapnil Bisen", "Tanya Verma", "Tarun Pasangya", "Trupti Manglani", "Tushar Gehlot", "Umesh Patidar", "Unknown", "Vaibhav Shrivastava", "Varun Patidar", "Vijay Arya", "Vineet Singh", "Vipul Kasera", "Vipul Shrivastava", "Vishal Patidar", "Vivek Manglik", "Vivek Pateria", "Vivek Singhal", "Yash Chauhan", "Yash Chopra", "Yash Pradhan", "Yogesh Joshi", "ajit singh thakur", "kapil sthapak", "karuna Sarawat", "kuvar pratp singh", "mahesh rathore", "saloni patni", "shraddha Panchal"];
  countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 
    'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Fiji', 
    'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 
    'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 
    'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 
    'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 
    'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 
    'Niger', 'Nigeria', 'North Macedonia (formerly Macedonia)', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
    'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 
    'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
  ];

  bidTypes = [
    { name: 'Bid' },
    { name: 'Invitation' }
    // Add other bid types here
  ];

  projectTypes = [
    { name: 'Hourly-Fulltime' },
    { name: 'Fixed Cost' }
    // Add other project types here
  ];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.jobForm = this.fb.group({
      createdTime: ['', Validators.required],
      industry: ['', Validators.required],
      technology: ['', Validators.required],
      technologyCategory: ['', Validators.required],
      bidType: ['', Validators.required],
      projectType: ['', Validators.required],
      country: ['', Validators.required],
      interviewHeld: ['', Validators.required],
      budget: ['', Validators.required],
      noOfApplicants: ['', Validators.required],
      hourlyRate: ['', Validators.required],
      connectsUsed: ['', Validators.required],
      boosted: [false],
      upworkProfile: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.jobForm);
    
    if (this.jobForm.valid) {
      const payload = {
        "Created Time": this.jobForm.value.createdTime, 
        "Industry": this.jobForm.value.industry,
        "Technology": this.jobForm.value.technology,
        "Technology Category": this.jobForm.value.technologyCategory,
        "Bid Type": this.jobForm.value.bidType.name,
        "Project Type": this.jobForm.value.projectType.name,
        "Country": this.jobForm.value.country,
        "Interview held": this.jobForm.value.interviewHeld,
        "Budget": this.jobForm.value.budget,
        "No of applicants": 10, // Example value
        "Hourly Rate": this.jobForm.value.hourlyRate,
        "Connects Used": this.jobForm.value.connectsUsed,
        "Boosted": this.jobForm.value.boosted,
        "Upwork Profile": this.jobForm.value.upworkProfile
      };
      console.log(payload);

      this.apiService.predict(payload).subscribe({
        next: (response) => {
          console.log('API Response:', response);
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // Getter for easier access to form controls in the template
  get f() {
    return this.jobForm.controls;
  }
}
