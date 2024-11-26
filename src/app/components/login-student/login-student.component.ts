import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginStudentService } from '../../service/loginStudent/login-student.service';
import Swal from 'sweetalert2'; // Importa SweetAle
@Component({
  selector: 'app-login-student',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent {
  name:string=';'
  matricula: string = ''; 
  password: string = ''; 
  modalMessage: string = ''; 

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private loginStudentService: LoginStudentService
  ) {}

  routeHome(event: Event): void {
    event.preventDefault(); // Evita la recarga de la página
    
    const name = (document.getElementById('name') as HTMLInputElement).value.trim()
    const matricula = (document.getElementById('matricula') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();

    if (!matricula || !password) {
      this.modalMessage = 'Debe llenar todos los campos.';
      this.mostrarModal();
      return;
    }

    this.spinner.show();

    const loginData = {
      name: name,
      registration_number: matricula,
      password: password
    };

    this.loginStudentService.loginStudent(loginData).subscribe(
      (response: { access_token: string }) => {
        console.log('Usuario autenticado');
        this.loginStudentService.storeStudentToken(response.access_token);
        this.router.navigate(['/homeStudent']); 
        this.spinner.hide();
      },
      (error) => {
        console.error('Error en el login:', error);
        this.mostrarError('Credenciales incorrectas. Intente nuevamente.');
        this.spinner.hide();
        // Manejo de errores
        if (error.status === 401) {
          // Si el servidor devuelve un error de autenticación
          
        } else {
          // Otros errores no previstos
          
        }
      }
    );
  }

  mostrarError(message: string): void {
    Swal.fire({
      title: '¡Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

  mostrarModal(): void {
    const modal = document.getElementById('errorModal')!;
    modal.style.display = 'flex';
  }

  closeModal(): void {
    const modal = document.getElementById('errorModal')!;
    modal.style.display = 'none';
  }
}
