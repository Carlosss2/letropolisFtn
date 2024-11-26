import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contened-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contened-number.component.html',
  styleUrl: './contened-number.component.scss'
})
export class ContenedNumberComponent {
  videos = [
    {
      url: 'numeros1.mp4',
      title: 'Numeros divertidos',
      description: 'Divierte aprendiendo los numeros.'
    },
    {
      url: 'numeros2.mp4',
      title: 'Cantando numeros',
      description: 'Con toda la actitud para aprender'
    },
    {
      url: 'numeros3.mp4',
      title: 'Contando 1,2,3',
      description: 'Diviertete con todo'
    },
    {
      url: 'numeros4.mp4',
      title: 'Contando 1,2,3,4',
      description: 'Diviertete con nosotros'
    },
    {
      url: 'numeros5.mp4',
      title: 'Contando 1,2,3,4,5',
      description: 'Diviertete con todoo'
    }, {
      url: 'numeros6.mp4',
      title: 'Contando 1,2,3,4,5,6',
      description: 'Diviertete con todito'
    }, {
      url: 'numeros7.mp4',
      title: 'Contando 1,2,3,4,5,6,7',
      description: 'Diviertete con todooooo'
    }, {
      url: 'numeros8.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8',
      description: 'Diviertete con toditoooo'
    },{
      url: 'numeros9.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,9',
      description: 'Diviertete con todooooo'
    },{
      url: 'numeros10.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,9,10',
      description: 'Diviertete con todooooo'
    },{
      url: 'numeros11.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,10,11',
      description: 'Diviertete aprendiendo'
    },{
      url: 'numeros12.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,10,11,12',
      description: 'Diviertete aprendiendo'
    },{
      url: 'numeros13.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,10,11,12,13',
      description: 'Diviertete aprendiendo'
    },{
      url: 'numeros14.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,10,11,12,13,14',
      description: 'Diviertete aprendiendo'
    },{
      url: 'numeros15.mp4',
      title: 'Contando 1,2,3,4,5,6,7,8,10,11,12,13,15',
      description: 'Diviertete aprendiendo'
    }
    // Agrega más videos si es necesario
  ];

  currentVideoIndex = 0;

  // Obtiene el video actual
  get currentVideo() {
    return this.videos[this.currentVideoIndex];
  }

  // Cambia al siguiente video
  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    } else {
      this.currentVideoIndex = 0; // Reinicia al primer video si está en el último
    }
  }

  // Cambia al video anterior
  prevVideo() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
    } else {
      this.currentVideoIndex = this.videos.length - 1; // Va al último video si está en el primero
    }
  }

}
