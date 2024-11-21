import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioGame } from '../../models/audio-game';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss'],
})
export class Game1Component {
  level = 1;
  targetLetter: AudioGame | null = null; // Puede ser null hasta que se inicialice
  options: AudioGame[] = [];
  feedback = '';
  progress = 0;
  points = 0;

  // Lista de letras con sus respectivos audios
  letters: AudioGame[] = [
    { letter: 'A', audioPath: 'letraA.mp3' },
    { letter: 'B', audioPath: 'letraB.mp3' },
    { letter: 'C', audioPath: 'letraC.mp3' },
    { letter: 'D', audioPath: 'letraD.mp3' },
    { letter: 'E', audioPath: 'letraE.mp3' },
    { letter: 'F', audioPath: 'letraF.mp3' },
    { letter: 'G', audioPath: 'letraG.mp3' },
    { letter: 'H', audioPath: 'letraH.mp3' },
    { letter: 'I', audioPath: 'letraI.mp3' },
    { letter: 'J', audioPath: 'letraJ.mp3' },
    { letter: 'K', audioPath: 'letraK.mp3' },
    { letter: 'L', audioPath: 'letraL.mp3' },
    { letter: 'M', audioPath: 'letraM.mp3' },
    { letter: 'N', audioPath: 'letraN.mp3' },
    { letter: 'O', audioPath: 'letraO.mp3' },
    { letter: 'P', audioPath: 'letraP.mp3' },
    { letter: 'Q', audioPath: 'letraQ.mp3' },
    { letter: 'R', audioPath: 'letraR.mp3' },
    { letter: 'S', audioPath: 'letraS.mp3' },
    { letter: 'T', audioPath: 'letraT.mp3' },
    { letter: 'U', audioPath: 'letraU.mp3' },
    { letter: 'V', audioPath: 'letraV.mp3' },
    { letter: 'X', audioPath: 'letraX.mp3' },
    { letter: 'Y', audioPath: 'letraY.mp3' },
    { letter: 'Z', audioPath: 'letraZ.mp3' },
  ];

  constructor(private router: Router) {
    this.startNewLevel();
  }

  // Función para iniciar un nuevo nivel
  startNewLevel() {
    this.targetLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    const otherOptions = this.shuffleArray(
      this.letters.filter(letter => letter.letter !== this.targetLetter!.letter)
    ).slice(0, 2);
    this.options = this.shuffleArray([this.targetLetter, ...otherOptions]);
    this.feedback = '';
  }

  playAudio() {
    if (this.targetLetter) {
      const audio = new Audio(this.targetLetter.audioPath);
      audio.play();
    }
  }

  selectOption(selectedLetter: AudioGame) {
    if (this.targetLetter && selectedLetter.letter === this.targetLetter.letter) {
      Swal.fire({
        title: '¡Correcto!',
        text: 'Avanzas al siguiente nivel.',
        icon: 'success',
      });
      this.level++;
      this.points += 5;
      this.progress += 10;

      if (this.progress >= 100) {
        Swal.fire({
          title: '¡Felicidades!',
          text: 'Has llenado la barra de progreso.',
          icon: 'success',
        });
        this.progress = 0; // Reinicia la barra.
      }

      setTimeout(() => this.startNewLevel(), 2000);
    } else {
      const errorAudio = new Audio('error.mp3'); // Ruta del audio de error.
      errorAudio.play();
      this.points = Math.max(0, this.points - 5);
      this.progress = Math.max(0, this.progress - 5);
      Swal.fire({
        title: '¡Incorrecto!',
        text: 'Vuelve a intentar.',
        icon: "error",
      });
    }
  }

  shuffleArray(array: AudioGame[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  savePoints() {
    Swal.fire({
      title: "Exelente trabajo.",
      text: 'Puntos registrados.',
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://usagif.com/wp-content/uploads/gify/felicidades-21-usagif.gif")
        left top
        no-repeat
      `
    });
  }

  exitGame() {
    Swal.fire({
      title: '¿Seguro que quieres salir?',
      text: "Asegurate de guardar tu progreso.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para salir del juego, por ejemplo, redirigir a la página principal:
        // this.router.navigate(['/home']);
        window.location.href = '/videogames';  // Redirige a la página principal
      }
    });
  }
 
}
