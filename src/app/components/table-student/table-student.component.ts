import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-student',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements AfterViewInit {

  displayedColumns: string[] = ['matricula', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'acciones'];
  dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminarEstudiante(matricula: number) {
    this.dataSource.data = this.dataSource.data.filter(student => student.matricula !== matricula);
  }
}

export interface Student {
  matricula: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
}

const ELEMENT_DATA: Student[] = [
  {matricula: 101, nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'García'},
  {matricula: 102, nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez'},
  {matricula: 103, nombre: 'Carlos', apellidoPaterno: 'Ramírez', apellidoMaterno: 'Fernández'},
  {matricula: 104, nombre: 'Ana', apellidoPaterno: 'Gómez', apellidoMaterno: 'Hernández'},
];
