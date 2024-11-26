import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../service/register/register.service';  // Asegúrate de importar el servicio correctamente
import { Register } from '../../models/register/register'; // Asegúrate de que el modelo esté bien importado
import { NotificationComponent } from '../notification/notification.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in-teacher',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-teacher.component.html',
  styleUrls: ['./sign-in-teacher.component.scss']
})
export class SignInTeacherComponent implements OnInit {

  inputName!: HTMLInputElement;
  inputEmail!: HTMLInputElement;
  inputPassword!: HTMLInputElement;

  constructor(private router: Router, private registerService: RegisterService) {}

  ngOnInit(): void {
    // Inicializando las referencias a los inputs
    this.inputName = document.getElementById('name') as HTMLInputElement;
    this.inputEmail = document.getElementById('email') as HTMLInputElement;
    this.inputPassword = document.getElementById('password') as HTMLInputElement;
  }



  routeLogin(event: Event): void {
    event.preventDefault();
    const username = this.inputName.value;
    const email = this.inputEmail.value;
    const password = this.inputPassword.value;
  
    const registerData: Register = {
      name: username,
      email: email,
      password: password,
      token: ''
    };
  
    this.registerService.registerUser(registerData).subscribe(
      () => {
        // Notificación de éxito
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El maestro ha sido registrado correctamente.',
          showConfirmButton: false,
          timer: 2000 // Oculta automáticamente en 2 segundos
        });
  
        // Redirigir al inicio de sesión
        this.router.navigate(['/loginTeacher']);
      },
      (error: any) => {
        // Notificación de error
        Swal.fire({
          icon: 'error',
          title: 'Error en el registro',
          text: 'Hubo un problema al registrar al maestro. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Aceptar'
        });
  
        console.error('Error al registrar al maestro', error);
      }
    );
  }
  
}
