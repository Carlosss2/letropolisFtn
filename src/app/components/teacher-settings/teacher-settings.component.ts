import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTeacherDialogComponent } from '../update-teacher-dialog/update-teacher-dialog.component';
import { AddStudentClassService } from '../../service/addStudentClass/add-student-class.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../service/login/login.service'; // Usamos el LoginService para obtener el token
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
import { AddClassTeacherService } from '../../service/addClassTeacher/add-class-teacher.service'; // Servicio para agregar clase
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
    CommonModule, 
    
  ]
})
export class TeacherSettingsComponent {
  teacherName = 'Mi Perfil';
  teacherEmail = 'Crea tu clase y agrega a tus alumnos';
  addStudentForm: FormGroup;
  addClassForm: FormGroup;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private addStudentClassService: AddStudentClassService,
    private http: HttpClient,
    private loginService: LoginService, // Inyectamos el LoginService
    private addClassTeacherService: AddClassTeacherService // Inyectamos el servicio AddClassTeacherService
  ) {
    // Formulario para agregar estudiante
    this.addStudentForm = this.fb.group({
     
      studentId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      classId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    // Formulario para agregar clase
    this.addClassForm = this.fb.group({
      className: ['', [Validators.required]],
      classDescription: ['', [Validators.required]],
      classId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Clase donde será registrado
    });
  }

  // Método para abrir el modal de actualización del maestro
  openUpdateTeacherModal() {
    this.dialog.open(UpdateTeacherDialogComponent, {
      width: '400px',
      data: { name: this.teacherName, email: this.teacherEmail },
    }).afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        this.teacherName = updatedData.name;
        this.teacherEmail = updatedData.email;
      }
    });
  }

  // Método para obtener el token desde el LoginService
  getToken(): string | null {
    return this.loginService.getToken(); // Usamos el servicio LoginService para obtener el token
  }

  // Método para agregar clase
  addClass() {
    if (this.addClassForm.valid) {
      const classData = this.addClassForm.value;
      const data = {
        name: classData.className,
        description: classData.classDescription,
        id: classData.classId
      };
  
      const token = this.getToken();
      if (token) {
        // Crear los headers con el token
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
  
        // Llamar al servicio pasando los datos de la clase y las cabeceras
        this.addClassTeacherService.addClassTeacher(data, headers)
          .subscribe(
            (response) => {
              console.log('Clase registrada:', response);
              Swal.fire("¡Éxito!", "La clase ha sido creada correctamente.", "success");
              this.addClassForm.reset(); // Limpia el formulario tras un registro exitoso
            },
            (error) => {
              console.error('Error al registrar la clase:', error);
              Swal.fire("Error", "Hubo un problema al registrar la clase.", "error");
            }
          );
      } else {
        console.error('Token no encontrado. Por favor, inicie sesión nuevamente.');
        Swal.fire("Error", "Token no encontrado. Inicie sesión nuevamente.", "error");
      }
    }
  }
  
  // Método para agregar estudiante
  // Método para agregar estudiante
  addStudent() {
    if (this.addStudentForm.valid) {
      const student = this.addStudentForm.value;
      const data = {
        student_id: student.studentId,
        class_id: student.classId
      };
  
      const token = this.getToken();
      console.log("Token:", token); // Verifica si el token está presente
  
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
  
        this.addStudentClassService.addStudentToClass(data, headers)
          .subscribe(
            (response) => {
              console.log('Estudiante registrado:', response);
              Swal.fire("¡Éxito!", "El estudiante ha sido registrado correctamente.", "success");
              this.addStudentForm.reset();
            },
            (error) => {
              console.error('Error al registrar al estudiante:', error);
              Swal.fire("Error", "Hubo un problema al registrar al estudiante.", "error");
            }
          );
      } else {
        console.error('Token no encontrado. Por favor, inicie sesión nuevamente.');
        Swal.fire("Error", "No se encontró el token de autorización. Inicie sesión nuevamente.", "error");
      }
    }
  }
  
  
  
  // Método para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    this.loginService.logoutUser(); // Usamos el método de LoginService para cerrar sesión
    this.router.navigate(['/landing']);

  }
}
