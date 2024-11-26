import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterStudentService } from '../../service/registerStudent/register-student.service';// Servicio actualizado
import { RegisterStudent } from '../../models/registerStudent/register-student'; // Modelo actualizado
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in-student',
  templateUrl: './sign-in-student.component.html',
  styleUrls: ['./sign-in-student.component.scss'],
})
export class SignInStudentComponent implements OnInit {
  inputName!: HTMLInputElement;
  inputPaternalSurname!: HTMLInputElement;
  inputMaternalSurname!: HTMLInputElement;
  inputRegistrationNumber!: HTMLInputElement;
  inputPassword!: HTMLInputElement;

  constructor(
    private router: Router,
    private registerStudentService: RegisterStudentService // Servicio de registro para estudiantes
  ) {}

  ngOnInit(): void {
    // Inicializando referencias a los inputs del DOM
    this.inputName = document.getElementById('name') as HTMLInputElement;
    this.inputPaternalSurname = document.getElementById('paternal_surname') as HTMLInputElement;
    this.inputMaternalSurname = document.getElementById('maternal_surname') as HTMLInputElement;
    this.inputRegistrationNumber = document.getElementById('matricula') as HTMLInputElement;
    this.inputPassword = document.getElementById('password') as HTMLInputElement;
  }

  routeLogin(event: Event): void {
    event.preventDefault();
    const name = this.inputName.value;
    const paternal_surname = this.inputPaternalSurname.value;
    const maternal_surname = this.inputMaternalSurname.value;
    const registration_number = this.inputRegistrationNumber.value;
    const password = this.inputPassword.value;
  
    const registerStudentData: RegisterStudent = {
      name,
      paternal_surname,
      maternal_surname,
      registration_number,
      password,
      token: ''
    };
  
    this.registerStudentService.registerStudent(registerStudentData).subscribe(
      () => {
        // Notificación de éxito con SweetAlert2
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'El estudiante ha sido registrado correctamente.',
          showConfirmButton: false,
          timer: 2000 // Cierra automáticamente después de 2 segundos
        });
  
        // Redirigir al inicio de sesión después de un breve retraso
        setTimeout(() => {
          this.router.navigate(['/loginStudent']);
        }, 2000);
      },
      (error: any) => {
        // Notificación de error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error en el registro',
          text: 'Hubo un problema al registrar al estudiante. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Aceptar'
        });
  
        console.error('Error al registrar al estudiante', error);
      }
    );
  }
  
}
