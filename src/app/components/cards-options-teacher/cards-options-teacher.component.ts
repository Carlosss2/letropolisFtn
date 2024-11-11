import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards-options-teacher',
  standalone: true,
  imports: [],
  templateUrl: './cards-options-teacher.component.html',
  styleUrl: './cards-options-teacher.component.scss'
})
export class CardsOptionsTeacherComponent {

  constructor(private router: Router){

  }
  
  routePost(){
    this.router.navigate(["/postWork"])
  }
  routeWork(){
    this.router.navigate(["/works"])
  }

  routeStudent(){
    this.router.navigate(["/seeStudent"])
  }


}
