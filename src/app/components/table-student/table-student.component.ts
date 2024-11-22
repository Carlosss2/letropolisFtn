import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteStudentComponent } from '../dialog-delete-student/dialog-delete-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table-student',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['matricula', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'acciones'];
  dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminarEstudiante(matricula: number) {
    const dialogRef = this.dialog.open(DialogDeleteStudentComponent, {
      width: '300px',
      data: { matricula },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(student => student.matricula !== matricula);
      }
    });
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
