import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private router: Router){

  }
  routeSignInTeacher(){
    this.router.navigate(["/sigIn/teacher"])
  }

  routeSignInStudent(){
    this.router.navigate(["signin/Student"])
  }

}
