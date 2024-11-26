import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contened-write',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contened-write.component.html',
  styleUrls: ['./contened-write.component.scss']
})
export class ContenedWriteComponent {

  // Lista de videos con propiedades url, título y descripción
  videos = [
    {
      url: 'abc.mp4',
      title: 'Abecedario',
      description: 'Diviértete escuchando el sonido ABC.'
    },
    {
      url: 'vocales.mp4',
      title: 'Las Vocales',
      description: 'Diviértete aprendiendo las vocales.'
    },
    {
      url: 'silabas.mp4',
      title: 'Las Sílabas',
      description: 'Descubre las sílabas.'
    },
    {
      url: 'write4.mp4',
      title: 'Aprender la A',
      description: 'Descubre las vocales.'
    },
    {
      url: 'write5.mp4',
      title: 'Aprender la E',
      description: 'Descubre las vocales.'
    },
    {
      url: 'writeNew5.mp4',
      title: 'Aprender la i',
      description: 'Descubre las vocales.'
    },
    {
      url: 'writeNew7.mp4',
      title: 'Abecedario repaso',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'write8.mp4',
      title: 'ca ce ci co cu',
      description: 'Respuesta abecedario'
    },
    {
      url: 'writeNew9.mp4',
      title: 'Escribir la letra m',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'writeNew10.mp4',
      title: 'ra re ri ro ru', 
      description: 'Respuesta abecedario'
    },
    {
      url: 'writeNew11.mp4',
      title: 'La le li lo lu',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'writeNew12.mp4',
      title: 'da de di do du',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'writeNew13.mp4',
      title: 'Escribir la letra F',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'writeNew14.mp4',
      title: 'Escribir la letra q',
      description: 'Respuesta abecedario' 
    },
    {
      url: 'writeNew15.mp4',
      title: 'va ve vi vo vu', //
      description: 'Respuesta abecedario'
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
