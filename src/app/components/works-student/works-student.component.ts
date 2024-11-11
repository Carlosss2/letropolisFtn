import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-works-student',
  standalone: true,
  imports: [MatCardModule,MatGridListModule,CommonModule],
  templateUrl: './works-student.component.html',
  styleUrl: './works-student.component.scss'
})
export class WorksStudentComponent {
  tareas = [
    {
      numeroActividad: 1,
      nombreTarea: 'Proyecto de Ciencia',
      alumno: 'Juan Pérez',
      imagenUrl: 'https://i.pinimg.com/originals/69/42/95/6942950e4144657c01a807f153ee3bee.png' // Ruta de la imagen
    },
    {
      numeroActividad: 2,
      nombreTarea: 'Ensayo de Literatura',
      alumno: 'María López',
      imagenUrl: 'https://i.pinimg.com/originals/69/42/95/6942950e4144657c01a807f153ee3bee.png'
    },
    {
      numeroActividad: 3,
      nombreTarea: 'Exposición de Historia',
      alumno: 'Carlos Ramírez',
      imagenUrl: 'https://i.pinimg.com/originals/69/42/95/6942950e4144657c01a807f153ee3bee.png'
    },
    {
      numeroActividad: 4,
      nombreTarea: 'Experimento de Química',
      alumno: 'Ana Gómez',
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_704320-MLM51265258792_082022-O.jpg'
    },
  ];
}
