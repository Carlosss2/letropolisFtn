import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contened-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contened-task.component.html',
  styleUrl: './contened-task.component.scss'
})
export class ContenedTaskComponent {
  tareas = [
    { imagenUrl: 'https://i.pinimg.com/originals/9b/48/31/9b48313680c7c1f50278963679220495.png', titulo: 'Tarea 1' },
    { imagenUrl: 'https://www.esimagenes.com/pimagen/vector-dinosaurio-png.png', titulo: 'Tarea 2' },
    { imagenUrl: 'https://www.clipartmax.com/png/full/82-823757_%C2%A0-dinosaur-clipart.png', titulo: 'Tarea 3' },
    { imagenUrl: 'https://static.vecteezy.com/system/resources/previews/009/378/074/original/cute-cartoon-dinosaur-character-free-png.png', titulo: 'Tarea 4' },
    { imagenUrl: 'https://static.vecteezy.com/system/resources/previews/009/378/072/original/cute-cartoon-dinosaur-character-free-png.png', titulo: 'Tarea 5' },
    { imagenUrl: 'https://static.vecteezy.com/system/resources/previews/009/378/067/non_2x/cute-cartoon-dinosaur-character-free-png.png', titulo: 'Tarea 6' },
    { imagenUrl: 'https://imagensemoldes.com.br/wp-content/uploads/2020/06/Cartoon-Dinossauro-Baby-PNG.png', titulo: 'Tarea 7' },
    { imagenUrl: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/31755.png', titulo: 'Tarea 8' },
    { imagenUrl: 'https://i.pinimg.com/originals/1e/17/7c/1e177ce5d459015c9b4fa38a40a6db33.png', titulo: 'Tarea 9' },
    { imagenUrl: 'https://i.pinimg.com/originals/72/bd/d0/72bdd01bfb00ca033a7c415aa9023eaa.png', titulo: 'Tarea 10' },
    { imagenUrl: 'https://i.pinimg.com/originals/72/bd/d0/72bdd01bfb00ca033a7c415aa9023eaa.png', titulo: 'Tarea 11' },
    { imagenUrl: 'https://i.pinimg.com/originals/4a/3c/c8/4a3cc892dad33465829dc3d2469595a3.png', titulo: 'Tarea 12' },
    { imagenUrl: 'https://www.esimagenes.com/pimagen/imagen-sin-fondo-dinosaurio.png', titulo: 'Tarea 13' },
    { imagenUrl: 'https://www.pngkey.com/png/full/75-756049_cute-dinosaur-png-graphic-royalty-free-stock-transparent.png', titulo: 'Tarea 14' },
    { imagenUrl: 'https://www.pinclipart.com/picdir/big/101-1011460_tyrannosaurus-cartoon-dinosaur-cute-imagenes-de-dinosaurios-animados.png', titulo: 'Tarea 15' },
    { imagenUrl: 'https://www.pinclipart.com/picdir/big/101-1011460_tyrannosaurus-cartoon-dinosaur-cute-imagenes-de-dinosaurios-animados.png', titulo: 'Tarea 16' },
    { imagenUrl: 'https://pnghq.com/wp-content/uploads/dinosaurios-animados-png-download-free-png-images-29983-768x581.png', titulo: 'Tarea 17' },
    { imagenUrl: 'https://static.vecteezy.com/system/resources/previews/023/636/516/original/cute-cartoon-dinosaur-free-png.png', titulo: 'Tarea 18' },
    { imagenUrl: 'https://esimagenes.com/pimagen/dinosaurio-imagen.png', titulo: 'Tarea 19' },
    { imagenUrl: 'https://esimagenes.com/pimagen/dinosaurio-imagen.png', titulo: 'Tarea 20' },
    { imagenUrl: 'https://i.pinimg.com/originals/0b/82/29/0b8229db1aef4dbe97df6fb2dc60ac84.png', titulo: 'Tarea 21' },
    { imagenUrl: 'https://i.pinimg.com/originals/b9/97/a8/b997a8f5535babed369f95bb74c30771.png', titulo: 'Tarea 22' },
    { imagenUrl: 'https://i.pinimg.com/originals/6c/1f/3b/6c1f3b704585bad3abac640cc31464ea.png', titulo: 'Tarea 23' },
    { imagenUrl: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/50439.png', titulo: 'Tarea 24' },
    { imagenUrl: 'https://i.pinimg.com/originals/8b/5a/f6/8b5af6d96973e415cd1676aa0c882550.png', titulo: 'Tarea 25' },
    { imagenUrl: 'https://i.pinimg.com/originals/61/a8/3f/61a83f2dd256279d48a4402d257661ea.png', titulo: 'Tarea 26' },
    { imagenUrl: 'https://i.pinimg.com/originals/4f/7c/0d/4f7c0df402449df0b90fd774fb7d83c7.png', titulo: 'Tarea 27' },
    { imagenUrl: 'https://i.pinimg.com/originals/5f/1e/7d/5f1e7d1a1b0d0dab399f0b09088c12ba.png', titulo: 'Tarea 28' },
    { imagenUrl: 'https://i.pinimg.com/originals/18/3e/4e/183e4eb893ab620c193704cd66559f6c.png', titulo: 'Tarea 29' },
    { imagenUrl: 'https://i.pinimg.com/originals/8a/d4/00/8ad4000bf17bceb8e491e73bcec38df8.png', titulo: 'Tarea 30' },
    { imagenUrl: 'https://i.pinimg.com/originals/cc/ab/89/ccab89ad04181575a5d860a42993aa55.png', titulo: 'Tarea 31' },
    { imagenUrl: 'https://i.pinimg.com/originals/8d/58/d8/8d58d88e190757a16532134b9b25366f.png', titulo: 'Tarea 32' },
    { imagenUrl: 'https://4.bp.blogspot.com/-_jH2U5sajoU/WWTnUMTAzVI/AAAAAAAAHWA/5u2yQXfwm_cmb-63QySmdvn3oiJtLAIqACEwYBhgL/s1600/BDdinosaurs5.png', titulo: 'Tarea 33' },
    { imagenUrl: 'https://gifss.com/dinosaurios/images/dinosaurio-34.gif', titulo: 'Tarea 34' },
    { imagenUrl: 'https://gifdb.com/images/high/hurray-cute-dinosaur-party-5rirlox41jpgv8cs.gif', titulo: 'Tarea 35' }
];

colores = [
  '#FFDDC1', '#FFD1DC', '#FFC1E3', '#FFCCE3', '#F3C1FF', '#C1D3FF',
  '#C1F1FF', '#C1FFE3', '#D1FFC1', '#FFE3C1', '#FFD8C1', '#C1C8FF',
  '#E3FFC1', '#D9FFEC', '#FFECDF', '#F3D5B5', '#B5D5F3', '#FFD5C1',
  '#D5C1FF', '#C1E7FF', '#DFFFC1', '#FFCCF1', '#D1FFD6', '#F3FFC1',
  '#C1FFE7', '#FFC1D1', '#C1FFC9', '#FFEBCE', '#D1B2FF', '#FFD7C1',
  '#C1F3FF', '#F3C1E0', '#FFE0F1', '#FFCCE5', '#B5FFC1', '#D1C1FF',
  '#FFC1C8', '#C1FFD3', '#FFD1F3', '#C8FFB5', '#D5FFD1', '#FFC1B5',
  '#C1DFF3', '#DFF3C1', '#FFCEE1', '#E3D1FF', '#C8FFDD', '#FFCDD5',
  '#F3C1D8', '#C1FFEB', '#C1FFF8', '#D1FFC8', '#E3C1FF', '#FFDFC1',
  '#D1E3FF', '#FFC1DF', '#C1FFEC', '#F3FFC1', '#C1D1FF', '#FFC8C1',
  '#C8E3FF', '#DFF3C1', '#FFEBF1', '#C1D8FF', '#E1FFC1', '#FFD1C1',
  '#F3B5C1', '#C1F3D1', '#FFDFEC', '#C1E3FF', '#FFC1E7', '#FFB5F3',
  '#D1FFEC', '#C1FFD1', '#FFC1C1', '#F3C1B5', '#E1C1FF', '#C8FFC1',
  '#F3D8C1', '#C1C1FF', '#FFC8E3', '#C1FFD8', '#FFDFC1', '#D1FFEB'
];

}
