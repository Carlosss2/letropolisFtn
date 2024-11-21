import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game4.component.html',
  styleUrls: ['./game4.component.scss'],
})
export class Game4Component {
  // Lista de desafíos
  challenges = [
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/018/931/403/original/cartoon-apple-icon-png.png', word: 'MANZANA' },
    { imageUrl: 'https://clipground.com/images/cartoon-monkey-clipart-5.png', word: 'MONO' },
    { imageUrl: 'https://img.freepik.com/vector-premium/ilustracion-pollito-dibujos-animados-dibujados-mano_52683-117258.jpg?w=2000', word: 'POLLO' },
    { imageUrl: 'https://i.pinimg.com/originals/a7/b0/ca/a7b0caa97283faa10e269bc534bdf606.png', word: 'PAPA' },
    
    { imageUrl: 'https://img.freepik.com/vector-premium/sol-dibujos-animados-lindo_249251-150.jpg?w=2000', word: 'SOL' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/007/660/845/non_2x/seascape-in-cartoon-flat-style-summer-sunny-day-beach-and-ocean-illustration-background-for-banner-logo-lettering-card-poster-blue-sky-sea-and-sand-landscape-panorama-seashore-vector.jpg', word: 'MAR' },
    { imageUrl: 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-happy-little-flower-illustration-image_1410347.jpg', word: 'FLOR' },
    { imageUrl: 'https://1.bp.blogspot.com/-Mxy-rlTODB8/YCUlVzPyghI/AAAAAAAKsHc/zu6tq61Pj8AuRTHKrGApf1BEIBJbsHLUwCLcBGAsYHQ/s1389/cat5_1534270.png', word: 'GATO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/011/795/207/non_2x/cartoon-house-and-the-sun-in-the-grass-field-vector.jpg', word: 'CASA' },
    { imageUrl: 'http://static6.depositphotos.com/1001911/628/v/950/depositphotos_6284433-stock-illustration-book-cartoon.jpg', word: 'LIBRO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/264/993/original/cartoon-wood-table-vector.jpg', word: 'MESA' },
    { imageUrl: 'https://i.pinimg.com/736x/f2/b6/d7/f2b6d7f0086a7418bf39442498d088c5.jpg', word: 'PATO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/551/053/large_2x/moon-smiling-cartoon-vector-illustration.jpg', word: 'LUNA' },
    { imageUrl: 'https://i.pinimg.com/originals/fc/4b/04/fc4b049bb66a97130df9003b4a030a19.jpg', word: 'SILLA' },
    { imageUrl: 'https://i.pinimg.com/originals/fc/4b/04/fc4b049bb66a97130df9003b4a030a19.jpg', word: 'RELOJ' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/020/310/173/original/happy-cute-cartoon-pear-vector.jpg', word: 'BALON' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/020/310/173/original/happy-cute-cartoon-pear-vector.jpg', word: 'PERA' },
    { imageUrl: 'https://image.freepik.com/vector-gratis/barco-dibujos-animados-agua_49499-111.jpg', word: 'BARCO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/020/273/547/non_2x/cute-cartoon-bear-illustration-free-vector.jpg', word: 'OSO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/018/931/604/original/cartoon-cookie-icon-png.png', word: 'GALLETA' },
    { imageUrl: 'http://clipart-library.com/images/kTKBME6Kc.png', word: 'OJO' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/previews/012/658/172/original/cute-puppy-dog-cartoon-illustration-vector.jpg', word: 'PERRO' },
    { imageUrl: 'https://i.pinimg.com/originals/75/05/75/7505750a56ed4e826857142abdee3571.png', word: 'MAESTRO' },

  ];

  currentChallengeIndex = 0; // Índice del nivel actual
  currentChallenge = this.challenges[this.currentChallengeIndex];

  // Configuración del gusanito y juego
  playerImageUrl = 'https://media.giphy.com/media/l1J9PkaZPVqnnz0Hu/giphy.gif'; // Ruta de la imagen del gusanito
  mapSize = 10;
  playerPosition = { x: 0, y: 0 };
  collectedLetters: string[] = [];
  lettersOnMap: { letter: string; x: number; y: number }[] = [];
  score = 0;
  progress = 0;

  constructor() {
    this.generateLetters();
  }

  // Generar letras en posiciones aleatorias sin repetir posiciones
  generateLetters() {
    this.lettersOnMap = [];
    const usedPositions = new Set<string>(); // Almacena posiciones ya ocupadas

    for (const letter of this.currentChallenge.word.split('')) {
      let position;
      let positionKey;
      do {
        position = this.getRandomPosition();
        positionKey = `${position.x}-${position.y}`; // Formato "x-y"
      } while (usedPositions.has(positionKey));

      usedPositions.add(positionKey); // Marcar posición como ocupada
      this.lettersOnMap.push({ letter, ...position });
    }
  }

  getRandomPosition() {
    return {
      x: Math.floor(Math.random() * this.mapSize),
      y: Math.floor(Math.random() * this.mapSize),
    };
  }

  // Movimiento del jugador
  movePlayer(direction: string) {
    switch (direction) {
      case 'up':
        if (this.playerPosition.y > 0) this.playerPosition.y--;
        break;
      case 'down':
        if (this.playerPosition.y < this.mapSize - 1) this.playerPosition.y++;
        break;
      case 'left':
        if (this.playerPosition.x > 0) this.playerPosition.x--;
        break;
      case 'right':
        if (this.playerPosition.x < this.mapSize - 1) this.playerPosition.x++;
        break;
    }
    this.checkCollision();
  }

  // Detectar colisión con letras
  checkCollision() {
    const index = this.lettersOnMap.findIndex(
      (letter) =>
        letter.x === this.playerPosition.x &&
        letter.y === this.playerPosition.y
    );

    if (index !== -1) {
      this.collectedLetters.push(this.lettersOnMap[index].letter);
      this.lettersOnMap.splice(index, 1);
    }
  }

  // Confirmar palabra
  confirmWord() {
    const formedWord = this.collectedLetters.join('');
    if (formedWord === this.currentChallenge.word) {
      this.score += 10;
      this.updateProgress(20); // Incrementa el progreso
      Swal.fire('¡Correcto!', 'Avanzas al siguiente nivel.', 'success').then(() =>
        this.advanceToNextLevel()
      );
    } else {
      this.score -= 5;
      this.updateProgress(-10); // Reduce el progreso
      Swal.fire('Palabra incorrecta', 'Intenta de nuevo.', 'error');
      this.resetGame();
    }
  }

  updateProgress(value: number) {
    this.progress = Math.min(100, Math.max(0, this.progress + value));
  }

  // Avanzar al siguiente nivel
  advanceToNextLevel() {
    if (this.currentChallengeIndex < this.challenges.length - 1) {
      this.currentChallengeIndex++;
      this.currentChallenge = this.challenges[this.currentChallengeIndex];
      this.resetGame();
    } else {
      Swal.fire('¡Felicidades!', 'Has completado todos los niveles.', 'success');
      this.resetGame();
    }
  }

  // Reiniciar el juego
  resetGame() {
    this.playerPosition = { x: 0, y: 0 };
    this.collectedLetters = [];
    this.generateLetters();
  }

  // Guardar puntos
  saveScore() {
    Swal.fire({
      title: '¡Puntos obtenidos!',
      text: `¡Has ganado puntos!`,
      icon: 'info',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://usagif.com/wp-content/uploads/gify/felicidades-21-usagif.gif")
        left top
        no-repeat
      `,
      confirmButtonText: 'Aceptar'
    });
  }

  // Salir del juego
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
