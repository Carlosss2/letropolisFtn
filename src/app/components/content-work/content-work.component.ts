import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content-work',
  standalone: true,
  imports: [],
  templateUrl: './content-work.component.html',
  styleUrl: './content-work.component.scss'
})
export class ContentWorkComponent {
  constructor(private router: Router){

  }
  
  routePostWork(){
    this.router.navigate(["/seePostWork"])
  }

  routeWorkStudent(){
    this.router.navigate(["/workStudents"])
  }
}
