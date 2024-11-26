import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Asegúrate de que tienes los módulos de Angular Material importados
import { CommonModule } from '@angular/common'; // Para el uso de `ngIf` y otras directivas
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-delete-student',
  standalone: true,
  imports: [MatButtonModule, CommonModule,MatDialogActions,MatDialogContent], // Importa los módulos aquí
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.scss']
})
export class DialogDeleteStudentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { matricula: number, class_id: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false); // Cierra el diálogo sin eliminar
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Cierra el diálogo confirmando la eliminación
  }
}
