import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importar el módulo de FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import { PostWorkService } from '../../service/postWork/post-work.service';  // Importa el servicio
import { PostWork } from '../../models/postWork/post-work';  // Importa el modelo
import { Router } from '@angular/router';  // Importar Router
import Swal from 'sweetalert2';  // Para mostrar alertas de éxito/error
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content-post-work',
  standalone: true,
  imports: [FullCalendarModule,FormsModule],
  templateUrl: './content-post-work.component.html',
  styleUrls: ['./content-post-work.component.scss']
})
export class ContentPostWorkComponent implements OnInit {
// Los datos del formulario
taskName: string = '';
taskNumber: number = 0;
taskDate: string = '';
taskDescription: string = '';
selectedClassId: number | null = null;  // Para almacenar el ID de la clase

// Opciones del calendario (ajusta según tus necesidades)
calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  editable:true,
  selectable: true,
  locale: 'es',
  events:[{}]
};

constructor(private postWorkService: PostWorkService) {}

ngOnInit(): void {}

// Método que se llama cuando el formulario se envía
onSubmit(event: Event): void {
  event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

  // Validar que se haya completado toda la información
  if (!this.taskName || !this.taskNumber || !this.taskDate || !this.taskDescription || !this.selectedClassId) {
    Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
    return;
  }

  // Crear un objeto con los datos del formulario
  const task: PostWork = {
    name: this.taskName,
    act_number: this.taskNumber,
    due_date: this.taskDate,
    description: this.taskDescription,
    class_id: this.selectedClassId,
  };

  // Llamar al servicio para publicar la tarea
  const token = localStorage.getItem('authToken');  // Asegúrate de obtener el token adecuado
  if (!token) {
    Swal.fire('Error', 'No se ha encontrado el token de autenticación.', 'error');
    return;
  }

  this.postWorkService.addPostWork(task, token).subscribe(
    (response) => {
      Swal.fire('Éxito', 'La tarea ha sido publicada correctamente.', 'success');
    },
    (error) => {
      console.error('Error al publicar la tarea:', error);
      Swal.fire('Error', 'Hubo un problema al publicar la tarea. Intenta nuevamente.', 'error');
    }
  );
}
onDateChange(event: any): void {
  const selectedDate = event.target.value;

  if (selectedDate) {
    // Agregar el evento al calendario
    this.calendarOptions.events = [
      ...this.calendarOptions.events,
      {
        title: 'Fecha de entrega de tarea',
        start: selectedDate,
        allDay: true
      }
    ];
  }
}

}
