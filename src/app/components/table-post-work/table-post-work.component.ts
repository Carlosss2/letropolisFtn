import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogDeleteTaskComponent } from '../dialog-delete-task/dialog-delete-task.component';
import { DialogUpdateTaskComponent } from '../dialog-update-task/dialog-update-task.component';

@Component({
  selector: 'app-table-post-work',
  templateUrl: './table-post-work.component.html',
  styleUrls: ['./table-post-work.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})
export class TablePostWorkComponent implements AfterViewInit {
  displayedColumns: string[] = ['numeroActividad', 'nombreTarea', 'fechaEntrega', 'acciones'];
  dataSource = new MatTableDataSource<Actividad>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarActividad(numeroActividad: number) {
    const actividad = this.dataSource.data.find(a => a.numeroActividad === numeroActividad);
    const dialogRef = this.dialog.open(DialogUpdateTaskComponent, {
      width: '400px',
      data: { ...actividad }, // Pasamos los datos de la actividad
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Actualizamos la actividad con los datos devueltos por el diálogo
        const index = this.dataSource.data.findIndex(a => a.numeroActividad === numeroActividad);
        this.dataSource.data[index] = result;
        this.dataSource._updateChangeSubscription(); // Refrescamos la tabla
      }
    });
  }

  eliminarActividad(numeroActividad: number) {
    const dialogRef = this.dialog.open(DialogDeleteTaskComponent, {
      width: '300px',
      data: { numeroActividad },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Eliminamos la actividad si el usuario confirma
        this.dataSource.data = this.dataSource.data.filter(actividad => actividad.numeroActividad !== numeroActividad);
      }
    });
  }

  constructor(public dialog: MatDialog) {}
}

export interface Actividad {
  numeroActividad: number;
  nombreTarea: string;
  fechaEntrega: Date;
}

const ELEMENT_DATA: Actividad[] = [
  { numeroActividad: 1, nombreTarea: 'Tarea de Matemáticas', fechaEntrega: new Date('2024-11-15') },
  { numeroActividad: 2, nombreTarea: 'Tarea de Ciencias', fechaEntrega: new Date('2024-11-20') },
  { numeroActividad: 3, nombreTarea: 'Proyecto de Historia', fechaEntrega: new Date('2024-11-25') },
  { numeroActividad: 4, nombreTarea: 'Ensayo de Literatura', fechaEntrega: new Date('2024-12-01') },
];
