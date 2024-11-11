import { Component } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { CommentsComponent } from '../comments/comments.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landig-page',
  standalone: true,
  imports: [FooterComponent,CardComponent,CommentsComponent,],
  templateUrl: './landig-page.component.html',
  styleUrl: './landig-page.component.scss'
})
export class LandigPageComponent {

  constructor(private router: Router){

  }

 

  
  routeSignIn(){
    this.router.navigate(["/signIn"])
  }

  routeLogin(){
    this.router.navigate(["/login"])
  }

}
