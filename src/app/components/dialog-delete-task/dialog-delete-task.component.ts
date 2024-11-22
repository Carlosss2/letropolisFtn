import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-dialog-delete-task',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButtonModule],
  templateUrl: './dialog-delete-task.component.html',
  styleUrls: ['./dialog-delete-task.component.scss'],
})
export class DialogDeleteTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numeroActividad: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
