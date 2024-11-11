import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards-option-student',
  standalone: true,
  imports: [],
  templateUrl: './cards-option-student.component.html',
  styleUrl: './cards-option-student.component.scss'
})
export class CardsOptionStudentComponent {
  constructor(private router: Router){

  }
  
  routeReading(){
    this.router.navigate(["/curseReading"])
  }
  routeWriting(){
    this.router.navigate(["/curseWriting"])
  }
  routeNumber(){
    this.router.navigate(["/curseNumber"])
  }
}
