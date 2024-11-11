import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"; // Asegúrate de importar el servicio
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-login-teacher',
  standalone: true,
  imports: [CommonModule,NgxSpinnerModule],
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss'] // Cambié a styleUrls
})
export class LoginTeacherComponent {
  constructor(private router: Router, private spinner: NgxSpinnerService) {} // Inyecta el servicio

  routeHome() {
    this.spinner.show(); // Muestra el spinner
    setTimeout(() => {
      this.router.navigate(["/homeTeacher"]);
      this.spinner.hide(); // Oculta el spinner después de navegar
    }, 1000); // Ajusta el tiempo según sea necesario
  }
}
