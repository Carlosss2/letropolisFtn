import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { GetSubmissionsService } from '../../service/getSubmissions/get-submissions.service';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-works-student',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule],
  templateUrl: './works-student.component.html',
  styleUrls: ['./works-student.component.scss']
})
export class WorksStudentComponent implements OnInit {
  tareas: any[] = []; // Cambia a una lista vacía

  constructor(private submissionsService: GetSubmissionsService) {}

  ngOnInit() {
    this.loadTareas(1); // Supongamos que 1 es el ID de la tarea
  }

  loadTareas(taskId: number) {
    this.submissionsService.getSubmissionsByTask(taskId).subscribe({
      next: (data) => {
        // Asignar las tareas obtenidas del backend
        this.tareas = data.map((submission: any) => ({
          numeroActividad: submission.id, // Ajusta según tu schema de backend
          nombreTarea: submission.title || 'Sin título',
          alumno: submission.student_name || 'Alumno desconocido',
          imagenUrl: submission.image_url || 'URL_DE_IMAGEN_POR_DEFECTO'
        }));
      },
      error: (err) => {
        console.error('Error al cargar las tareas:', err);
      }
    });
  }
}
