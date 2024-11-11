import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table-post-work',
  templateUrl: './table-post-work.component.html',
  styleUrls: ['./table-post-work.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,CommonModule],
})
export class TablePostWorkComponent implements AfterViewInit {

  displayedColumns: string[] = ['numeroActividad', 'nombreTarea', 'fechaEntrega', 'acciones'];
  dataSource = new MatTableDataSource<Actividad>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // Asegúrate de que el paginator se asigne solo después de que la vista esté inicializada
    this.dataSource.paginator = this.paginator;
  }

  editarActividad(numeroActividad: number) {
    console.log(`Editar actividad con número: ${numeroActividad}`);
    // Implementar la lógica de edición aquí
  }

  eliminarActividad(numeroActividad: number) {
    this.dataSource.data = this.dataSource.data.filter(actividad => actividad.numeroActividad !== numeroActividad);
  }
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
