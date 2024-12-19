import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-table-pagination',
  standalone: true, // Mark as standalone
  imports: [MatTableModule, MatPaginatorModule], // Import required modules
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent {

  pageSize = 15;
  pageIndex = 0;
  
  @Input() apiData: any[] = [];
  @Input() dataCount: number = 0;
  @Input() displayedColumns: string[] = [];
  @Output() pageChange = new EventEmitter<any>();

  constructor() {
  }

  pageEvent(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageChange.emit(event);
  }
}


