import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogManualUserComponent } from '../dialog-manual-user/dialog-manual-user.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cards-option-student',
  standalone: true,
  imports: [],
  templateUrl: './cards-option-student.component.html',
  styleUrl: './cards-option-student.component.scss'
})
export class CardsOptionStudentComponent {
  constructor(private router: Router,private dialog: MatDialog){

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
  openUserManual() {
    this.dialog.open( DialogManualUserComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container', // Clase personalizada si necesitas más estilos
    });
  }

}
