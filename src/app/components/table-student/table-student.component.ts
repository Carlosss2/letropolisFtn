import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SeeStudentsClassService } from '../../service/seeStudentsClass/see-students-class.service'; // Asegúrate de importar el servicio
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DialogDeleteStudentComponent } from '../dialog-delete-student/dialog-delete-student.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginService } from '../../service/login/login.service'; // Usamos el LoginService para obtener el token
import { DeleteStudentsClassService } from '../../service/deleteStudentsClass/delete-students-class.service'; // Importa el 
import { AddClassTeacher } from '../../models/addClassTeacher/add-class-teacher';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-student',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements AfterViewInit {
  displayedColumns: string[] = ['matricula', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'acciones'];
  dataSource = new MatTableDataSource<any>(); // Inicializa la tabla con datos vacíos
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private loginService: LoginService,
    private seeStudentsClassService: SeeStudentsClassService, // Inyecta el servicio
    public dialog: MatDialog,
    private deleteStudentsClassService: DeleteStudentsClassService,
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getToken(): string | null {
    return this.loginService.getToken(); // Usamos el servicio LoginService para obtener el token
  }
  // Método para obtener los estudiantes
  getStudents(classId: number) {
    const token = this.getToken(); // Asegúrate de obtener el token desde donde lo tengas almacenado
    if (!token) {
      console.error('No token found');
      return;
    }

    this.seeStudentsClassService.getStudentsByClassId(classId, token).subscribe(
      (data) => {
        console.log('Datos recibidos:', data); // Agrega este log para ver los datos en la consola
        if (data && data.length > 0) {
          this.dataSource.data = data; // Asigna los datos a dataSource
        } else {
          console.log('No students found for this class');
          this.dataSource.data = [];
        }
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
    
  }

  eliminarEstudiante(matricula: number, classId: number): void {
    const token = this.getToken(); // Obtener el token del servicio de autenticación
    if (!token) {
      console.error('No token found');
      return;
    }
  
    const dialogRef = this.dialog.open(DialogDeleteStudentComponent, {
      width: '300px',
      data: { matricula, classId },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Llamar al servicio para eliminar el estudiante
        this.deleteStudentsClassService.deleteStudentFromClass(matricula, classId, token).subscribe(
          (response) => {
            console.log('Estudiante eliminado:', response);
            
            // Filtrar el estudiante eliminado de la tabla
            this.dataSource.data = this.dataSource.data.filter(student => student.matricula !== matricula);
            
            // Mostrar mensaje de éxito usando SweetAlert2
            Swal.fire({
              title: '¡Éxito!',
              text: 'El estudiante ha sido eliminado correctamente.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          },
          (error) => {
            console.error('Error al eliminar el estudiante:', error);
            
            // Mostrar mensaje de error usando SweetAlert2
            Swal.fire({
              title: '¡Error!',
              text: 'Hubo un problema al eliminar al estudiante. Intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        );
      }
    });
  }
  
  // Método para obtener el token (reemplaza con la lógica correcta según tu aplicación)
  

  // Puedes llamar a este método cuando se inicie el componente o cuando se seleccione una clase
  ngOnInit() {
    // Ejemplo de cómo obtener los estudiantes para la clase con ID 100
    this.getStudents(100); // Cambia el ID por el de la clase correspondiente
  }

 
}
