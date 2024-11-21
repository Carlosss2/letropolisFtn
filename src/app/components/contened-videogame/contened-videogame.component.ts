import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contened-videogame',
  standalone: true,
  imports: [],
  templateUrl: './contened-videogame.component.html',
  styleUrl: './contened-videogame.component.scss'
})
export class ContenedVideogameComponent {
  constructor(private router: Router){

  }
  
  routeGame1(){
    this.router.navigate(["/gameAverage"])
  }

  routeGame2(){
    this.router.navigate(["/gameCars"])
  }

  routeGame3(){
    this.router.navigate(["/gameSpace"])
  }

  routeGame4(){
    this.router.navigate(["/gameScrable"])
  }
}
