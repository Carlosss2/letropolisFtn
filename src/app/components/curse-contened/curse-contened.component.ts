import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { GetWorksService } from '../../service/getWorks/get-works.service';  // Asegúrate de importar el servicio
import { DialogTaskComponent } from '../dialog-task/dialog-task.component';

@Component({
  selector: 'app-curse-contened',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './curse-contened.component.html',
  styleUrls: ['./curse-contened.component.scss']
})
export class CurseContenedComponent implements OnInit {
  tareas: any[] = [];  // Esta propiedad contendrá las tareas obtenidas desde la API

  constructor(
    private dialog: MatDialog,
    private getWorksService: GetWorksService  // Inyectamos el servicio
  ) {}

  ngOnInit() {
    this.loadTareas();  // Llamamos al servicio cuando el componente se inicializa
  }

  // Método para cargar las tareas desde el servicio
  loadTareas() {
    this.getWorksService.getTasksByClassId().subscribe({
      next: (data) => {
        this.tareas = data;  // Asignamos las tareas a la propiedad 'tareas'
      },
      error: (err) => {
        console.error('Error al obtener las tareas:', err);
      }
    });
  }

  // Método para abrir el diálogo
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró', result);
    });
  }
}
