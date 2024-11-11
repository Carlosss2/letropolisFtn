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
      url: 'https://youtu.be/ccEpTTZW34g?si=NwgkwyLLUsuep9jM',
      title: 'Título del Video 1',
      description: 'Descripción breve del video 1.'
    },
    {
      url: 'ruta-del-video2.mp4',
      title: 'Título del Video 2',
      description: 'Descripción breve del video 2.'
    },
    {
      url: 'ruta-del-video3.mp4',
      title: 'Título del Video 3',
      description: 'Descripción breve del video 3.'
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
