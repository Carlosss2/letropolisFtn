import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-student',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-student.component.html',
  styleUrl: './sign-in-student.component.scss'
})
export class SignInStudentComponent {

  constructor(private router: Router){

  }
  routeLogin(){
    this.router.navigate(["/loginStudent"])
  }
}
