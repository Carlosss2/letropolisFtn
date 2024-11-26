import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { CommentsComponent } from '../comments/comments.component';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DialogPremiumComponent } from '../dialog-premium/dialog-premium.component';

@Component({
  selector: 'app-landig-page',
  standalone: true,
  imports: [FooterComponent,CardComponent,CommentsComponent,],
  templateUrl: './landig-page.component.html',
  styleUrl: './landig-page.component.scss'
})
export class LandigPageComponent {

  constructor(private router: Router,public dialog: MatDialog){
    
  }
  studentId = 11;
  openPaymentDialog() {
    const dialogRef = this.dialog.open(DialogPremiumComponent, {
      width: '400px',
      data: { student_id: this.studentId }, // Pasa el ID del estudiante al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Pago procesado:', result);
        // Lógica para procesar el pago (enviar a API o mostrar mensaje)
      } else {
        console.log('Pago cancelado');
      }
    });
  }
  
  routeSignIn(){
    this.router.navigate(["/signIn"])
  }

  routeLogin(){
    this.router.navigate(["/login"])
  }

}
