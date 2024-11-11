import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'; // Asegúrate de importar el servicio
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-login-student',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss'] // Cambié a styleUrls
})
export class LoginStudentComponent {
  constructor(private router: Router, private spinner: NgxSpinnerService) {} // Inyecta el servicio

  routeHome() {
    this.spinner.show(); // Muestra el spinner
    setTimeout(() => {
      this.router.navigate(["/homeStudent"]);
      this.spinner.hide(); // Oculta el spinner después de navegar
    }, 1000); // Ajusta el tiempo según sea necesario
  }
}
