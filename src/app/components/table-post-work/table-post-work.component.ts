import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { GetWorksService } from '../../service/getWorks/get-works.service';  // Importa el servicio
import { DialogDeleteTaskComponent } from '../dialog-delete-task/dialog-delete-task.component';
import { DialogUpdateTaskComponent } from '../dialog-update-task/dialog-update-task.component';
import { PostWork } from '../../models/postWork/post-work';
@Component({
  selector: 'app-table-post-work',
  templateUrl: './table-post-work.component.html',
  styleUrls: ['./table-post-work.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})
export class TablePostWorkComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['numeroActividad', 'nombreTarea', 'fechaEntrega', 'acciones'];
  dataSource = new MatTableDataSource<PostWork>([]); // Inicializa como un array vacío

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private getWorksService: GetWorksService,  // Inyecta el servicio
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadTasks();  // Cargar tareas al iniciar el componente
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Método para cargar las tareas de la clase
  loadTasks() {
    this.getWorksService.getTasksByClassId().subscribe({
      next: (data) => {
        // Asigna las tareas a la dataSource
        this.dataSource.data = data;  // Asume que el backend devuelve un array de tareas
      },
      error: (err) => {
        console.error('Error al obtener las tareas:', err);
      }
    });
  }

  editarActividad(numeroActividad: number) {
    // Encuentra la actividad a editar en la dataSource
    const actividad = this.dataSource.data.find(a => a.act_number === numeroActividad);
  
    if (actividad) {
      const dialogRef = this.dialog.open(DialogUpdateTaskComponent, {
        width: '400px',
        data: {
          act_number: actividad.act_number,   // Asegúrate de pasar el act_number
          name: actividad.name,               // Nombre de la tarea
          due_date: actividad.due_date,       // Fecha de entrega (puedes formatearla si es necesario)
          description: actividad.description, // Descripción si la tienes
          class_id: actividad.class_id       // class_id si lo tienes en el modelo
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Actualiza la actividad en la tabla con los datos devueltos del diálogo
          const index = this.dataSource.data.findIndex(a => a.act_number === numeroActividad);
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription(); // Refresca la tabla
        }
      });
    }
  }
  
  eliminarActividad(numeroActividad: number) {
    const dialogRef = this.dialog.open(DialogDeleteTaskComponent, {
      width: '300px',
      data: { numeroActividad },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Elimina la actividad de la tabla
        this.dataSource.data = this.dataSource.data.filter(actividad => actividad.act_number !== numeroActividad);
      }
    });
  }
}

export interface Actividad {
  numeroActividad: number;
  nombreTarea: string;
  fechaEntrega: Date;
}
