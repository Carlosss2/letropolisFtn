import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contened-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contened-read.component.html',
  styleUrls: ['./contened-read.component.scss']
})
export class ContenedReadComponent {
  lecturas = [
    { imagenUrl: 'https://vignette.wikia.nocookie.net/biblioteca-virtual-de-literatura/images/1/1e/Caperucita_Roja.jpg/revision/latest?cb=20180628205842&path-prefix=es', titulo: 'Caperucita Roja' },
    { imagenUrl: 'https://imagessl5.casadellibro.com/a/l/t0/25/9788408092025.jpg', titulo: 'Los Tres Cerditos' },
    { imagenUrl: 'https://image.slideserve.com/556188/la-liebre-y-la-tortuga-l.jpg', titulo: 'La Tortuga y la Liebre' },
    { imagenUrl: 'https://static.guiainfantil.com/media/20912/manzanaG.jpg', titulo: 'Blancanieves' },
    { imagenUrl: 'https://tse1.mm.bing.net/th?id=OIP.kXjnd3eRt0QmQiIBTb7f_wHaEK&pid=Api&P=0&h=180', titulo: 'Aladino y la Lámpara Mágica' },
    { imagenUrl: 'https://image.isu.pub/220505082358-626a70f0bc440baf4a4cd6ce5f08824d/jpg/page_1.jpg', titulo: 'El Patito Feo' },
    { imagenUrl: 'https://4.bp.blogspot.com/-Zt_g2IBugNk/W85KJ8eIMJI/AAAAAAAAM1w/C4kl5awKL8gD97pxAkAjPZR2HR0YioynwCLcBGAs/s1600/portada_la-bella-durmiente-un-giro-inesperado_disney_201806010732.jpg', titulo: 'La Bella Durmiente' },
    { imagenUrl: 'https://i.ytimg.com/vi/zmmUuZFZX44/maxresdefault.jpg', titulo: 'Ricitos de Oro y los Tres Osos' },
    { imagenUrl: 'https://imagessl2.casadellibro.com/a/l/t0/92/9788416795192.jpg', titulo: 'El Principito' }

  ];
}
