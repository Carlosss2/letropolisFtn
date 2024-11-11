import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-teacher',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-teacher.component.html',
  styleUrl: './sign-in-teacher.component.scss'
})
export class SignInTeacherComponent {

  constructor(private router: Router){

  }
  routeLogin(){
    this.router.navigate(["/loginTeacher"])
  }


}
