import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-delete-student',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButtonModule],
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.scss']
})
export class DialogDeleteStudentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { matricula: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
