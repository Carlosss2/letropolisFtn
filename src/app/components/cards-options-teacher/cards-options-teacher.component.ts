import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogChatComponent } from '../dialog-chat/dialog-chat.component';
@Component({
  selector: 'app-cards-options-teacher',
  standalone: true,
  imports: [],
  templateUrl: './cards-options-teacher.component.html',
  styleUrl: './cards-options-teacher.component.scss'
})
export class CardsOptionsTeacherComponent {

  constructor(private router: Router,private dialog: MatDialog){

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

  openChat() {
    this.dialog.open( DialogChatComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container', // Clase personalizada si necesitas más estilos
    });
  }
}
