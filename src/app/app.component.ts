import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressPopupComponent } from './shared/progress-popup/progress-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SinglePridictionFormComponent } from './components/single-pridiction-form/single-pridiction-form.component';
import { MultiPridictionFormComponent } from './components/multi-pridiction-form/multi-pridiction-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TablePaginationComponent } from './shared/table-pagination/table-pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatDialogModule,  
    MatTabsModule,
    RouterOutlet,
    ReactiveFormsModule, 
    CommonModule,
    ProgressPopupComponent,
    SinglePridictionFormComponent,
    MultiPridictionFormComponent,
    TablePaginationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 title="app"
} 
