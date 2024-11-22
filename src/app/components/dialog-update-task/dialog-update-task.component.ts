import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialog-update-task',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButtonModule,MatFormField,MatLabel,CommonModule,FormsModule],
  templateUrl: './dialog-update-task.component.html',
  styleUrls: ['./dialog-update-task.component.scss'],
})
export class DialogUpdateTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numeroActividad: number; nombreTarea: string; fechaEntrega: Date }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data); // Devuelve los datos actualizados
  }
}
