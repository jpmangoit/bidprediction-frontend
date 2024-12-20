import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-progress-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-popup.component.html',
  styleUrl: './progress-popup.component.css'
})
export class ProgressPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ProgressPopupComponent>) {
    console.log(data);
    
  }

  closeDialog(value?: any): void {
    this.dialogRef.close(value); // Close the dialog
  }
}
