// dialog-task.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostSubmissionsService } from '../../service/postSubmissions/post-submissions.service';
import { LoginStudentService } from '../../service/loginStudent/login-student.service'; 
import Swal from 'sweetalert2';  // Importar SweetAlert2
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-task',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FormsModule],
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.scss']
})
export class DialogTaskComponent {
  idTask: number = 0;
  idStudent: number = 0;
  imageUrl: string = '';  // Guardamos la URL de la imagen aquí

  constructor(
    public dialogRef: MatDialogRef<DialogTaskComponent>,
    private postSubmissionsService: PostSubmissionsService,
    private loginStudentService: LoginStudentService  // Inyectamos el servicio de login
  ) {}

  // Esta función se llama cuando se selecciona un archivo en el input de tipo 'file'
  selectedFile: File | null = null;

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Cerrar el diálogo
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Método para cargar la tarea
  submitTask(): void {
    if (!this.idTask || !this.idStudent || !this.selectedFile) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos.',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    // Recuperar el token del servicio LoginStudentService
    const token = this.loginStudentService.getStudentToken();
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'No autenticado',
        text: 'No estás autenticado. Por favor, inicia sesión.',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    // Primero, subimos la imagen
    this.postSubmissionsService.uploadImage(this.selectedFile).subscribe({
      next: (response) => {
        // Si la imagen se subió con éxito, obtenemos la URL de la imagen
        this.imageUrl = response.imageUrl;  // Asegúrate de que la respuesta tenga la propiedad 'imageUrl'

        // Ahora podemos enviar la tarea con la URL de la imagen
        const submissionData = {
          idTask: this.idTask,
          idStudent: this.idStudent,
          imageUrl: this.imageUrl  // Usamos la URL de la imagen
        };

        // Pasar el token al servicio de carga de tareas
        this.postSubmissionsService.createSubmission(submissionData, token).subscribe({
          next: (response) => {
            // Si la tarea se cargó con éxito
            Swal.fire({
              icon: 'success',
              title: 'Tarea cargada con éxito',
              text: 'La tarea se ha cargado correctamente.',
              confirmButtonText: 'Cerrar',
            }).then(() => {
              this.dialogRef.close();  // Cerrar el diálogo después de la alerta
            });
          },
          error: (err) => {
            // Si hubo un error al cargar la tarea
            const errorMessage = err.error?.detail || 'Hubo un error al cargar la tarea. Intenta de nuevo.';
            Swal.fire({
              icon: 'error',
              title: 'Error al cargar la tarea',
              text: errorMessage,
              confirmButtonText: 'Cerrar',
            });
          }
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al subir la imagen',
          text: 'Hubo un error al subir la imagen. Intenta de nuevo.',
          confirmButtonText: 'Cerrar',
        });
      }
    });
  }
}
