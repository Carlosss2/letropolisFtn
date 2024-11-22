import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-curse-contened',
  standalone: true,
  imports: [CommonModule,MatGridListModule,MatCardModule],
  templateUrl: './curse-contened.component.html',
  styleUrl: './curse-contened.component.scss'
})
export class CurseContenedComponent {
  tareas = [
    {
      numeroActividad: 1,
      nombreTarea: 'Abecedario',
      descripcion: 'escribe abcd',
          },
    
  ];
}
