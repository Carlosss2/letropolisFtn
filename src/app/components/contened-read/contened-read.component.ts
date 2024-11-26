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
    { 
      imagenUrl: 'https://vignette.wikia.nocookie.net/biblioteca-virtual-de-literatura/images/1/1e/Caperucita_Roja.jpg/revision/latest?cb=20180628205842&path-prefix=es', 
      titulo: 'Caperucita Roja',
      url: 'https://portaldelasescuelas.org/wp-content/uploads/2015/08/Caperucita-Roja-COMPLETO-ilovepdf-compressed.pdf'
    },
    { 
      imagenUrl: 'https://imagessl5.casadellibro.com/a/l/t0/25/9788408092025.jpg', 
      titulo: 'Los Tres Cerditos',
      url: 'https://www.leer.org/files/Site/2019/Los%20Tres%20Chanchitos.pdf'
    },
    { 
      imagenUrl: 'https://image.slideserve.com/556188/la-liebre-y-la-tortuga-l.jpg', 
      titulo: 'La Tortuga y la Liebre',
      url: 'https://iniciativasocial.es/wp-content/uploads/2020/04/Cuentos-Infantiles-5.pdf'
    },
    { 
      imagenUrl: 'https://static.guiainfantil.com/media/20912/manzanaG.jpg', 
      titulo: 'Blancanieves',
      url: 'https://cdnsnte1.s3.us-west-1.amazonaws.com/wp-content/uploads/2020/04/03215957/WaltDisney-BlancanievesYLosSieteEnanitos.pdf'
    },
    { 
      imagenUrl: 'https://tse1.mm.bing.net/th?id=OIP.kXjnd3eRt0QmQiIBTb7f_wHaEK&pid=Api&P=0&h=180', 
      titulo: 'Aladino y la Lámpara Mágica',
      url: 'https://storage.dtelab.com.ar/uploads/6176ee4f029d528c9c25c0ee/6176ef0c43b0726eb0b96ffa.pdf'
    },
    { 
      imagenUrl: 'https://image.isu.pub/220505082358-626a70f0bc440baf4a4cd6ce5f08824d/jpg/page_1.jpg', 
      titulo: 'El Patito Feo',
      url: 'https://comunidadsm.com.pe/wp-content/uploads/El-Patito-Feo-1.pdf'
    },
    { 
      imagenUrl: 'https://4.bp.blogspot.com/-Zt_g2IBugNk/W85KJ8eIMJI/AAAAAAAAM1w/C4kl5awKL8gD97pxAkAjPZR2HR0YioynwCLcBGAs/s1600/portada_la-bella-durmiente-un-giro-inesperado_disney_201806010732.jpg', 
      titulo: 'La Bella Durmiente',
      url: 'https://portaldelasescuelas.org/wp-content/uploads/2016/03/La-Bella-Durmiente-COMPLETO-ilovepdf-compressed-1.pdf'
    },
    { 
      imagenUrl: 'https://i.ytimg.com/vi/zmmUuZFZX44/maxresdefault.jpg', 
      titulo: 'Ricitos de Oro y los Tres Osos',
      url: 'https://www.curriculumnacional.cl/614/articles-23602_recurso_pdf.pdf'
    },
    { 
      imagenUrl: 'https://imagessl2.casadellibro.com/a/l/t0/92/9788416795192.jpg', 
      titulo: 'El Principito',
      url: 'https://www.imprentanacional.go.cr/editorialdigital/libros/literatura%20infantil/el_principito_edincr.pdf'
    }
  ];

  // Función para redirigir al cuento correspondiente
  redirectToCuento(url: string): void {
    window.location.href = url; // Redirige a la URL proporcionada
  }
}
