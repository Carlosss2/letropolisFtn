import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { PostWorkService } from '../../service/postWork/post-work.service';
import { PostWork } from '../../models/postWork/post-work'; // Asegúrate de que el modelo esté importado
import Swal from 'sweetalert2'; // Importamos SweetAlert2
@Component({
  selector: 'app-dialog-update-task',
  standalone: true,
  imports: [ MatButtonModule,CommonModule,FormsModule],
  templateUrl: './dialog-update-task.component.html',
  styleUrls: ['./dialog-update-task.component.scss'],
})
export class DialogUpdateTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numeroActividad: number; nombreTarea: string; fechaEntrega: Date },
    private postWorkService: PostWorkService // Inyectamos el servicio
  ) {}

  // Método de cancelación
  onCancel(): void {
    this.dialogRef.close();
  }

  // Método para guardar los cambios
  onSave(): void {
    // Convertir fechaEntrega a un objeto Date
    const dueDate = new Date(this.data.fechaEntrega);
  
    // Verificar si la conversión fue exitosa (es una fecha válida)
    if (isNaN(dueDate.getTime())) {
      Swal.fire({
        title: 'Error!',
        text: 'La fecha de entrega es inválida.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return; // Salir de la función si la fecha no es válida
    }
  
    // Convertir la fecha a formato de cadena 'YYYY-MM-DD'
    const dueDateString = dueDate.toISOString().split('T')[0]; // Esto devuelve 'YYYY-MM-DD'
  
    // Aseguramos que el número de actividad se pasa al modelo
    const updatedPostWork: PostWork = {
      act_number: this.data.numeroActividad,   // número de actividad (ID)
      name: this.data.nombreTarea,             // nombre de tarea
      due_date: dueDateString,                 // fecha de entrega como string
      description: '',                         // Añadir el campo de descripción si es necesario
      class_id: 0,                             // Añadir el campo de class_id si es necesario
    };
  
    // Llamamos al servicio para actualizar el trabajo
    const token = localStorage.getItem('authToken');  // Obtener el token desde localStorage
    if (token) {
      this.postWorkService.updatePostWork(updatedPostWork).subscribe(
        (response) => {
          // Si la tarea se actualiza correctamente, mostramos una alerta de éxito
          Swal.fire({
            title: 'Éxito!',
            text: 'La tarea se actualizó correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.dialogRef.close(response);  // Cerrar el diálogo y devolver la tarea actualizada
          });
        },
        (error) => {
          // Si ocurre un error, mostramos una alerta de error
          Swal.fire({
            title: 'Error!',
            text: 'Hubo un problema al actualizar la tarea.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    } else {
      console.error('No se encontró el token de autenticación');
      Swal.fire({
        title: 'Error!',
        text: 'No se encontró el token de autenticación.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
   }
