import { Component } from '@angular/core';

import { CardsOptionsTeacherComponent } from '../cards-options-teacher/cards-options-teacher.component';



@Component({
  selector: 'app-home-teacher',
  standalone: true,
  imports: [CardsOptionsTeacherComponent],
  templateUrl: './home-teacher.component.html',
  styleUrl: './home-teacher.component.scss'
})
export class HomeTeacherComponent {

}
