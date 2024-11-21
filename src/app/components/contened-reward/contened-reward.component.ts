import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contened-reward',
  standalone: true,
  imports: [],
  templateUrl: './contened-reward.component.html',
  styleUrl: './contened-reward.component.scss'
})
export class ContenedRewardComponent {
  constructor(private router: Router){

  }
  
  routeGames(){
    this.router.navigate(["/videogames"])
  }
}
