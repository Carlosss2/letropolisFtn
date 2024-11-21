import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';  // Importamos SweetAlert2

@Component({
  selector: 'app-game3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.scss'],
})
export class Game3Component {
  allLetters = this.generateLetters(); // Todas las letras posibles
  allContainers: any[] = []; // Todos los contenedores posibles
  letters: string[] = []; // Letras visibles (10 por nivel)
  containers: any[] = []; // Contenedores visibles (5 por nivel)
  points: number = 0; // Puntos acumulados
  level: number = 1; // Nivel actual
  draggedLetter: string | null = null; // Letra que se está arrastrando

  // Calcula el progreso como porcentaje
  get progress(): number {
    return (this.points / 52) * 100; // 52 letras en total (A-Z y a-z)
  }

  constructor() {
    this.initializeLevel(); // Inicializa el primer nivel
  }

  // Genera las letras minúsculas (a-z)
  generateLetters(): string[] {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return lowercase; // Solo letras minúsculas
  }

  // Genera los contenedores (letras mayúsculas A-Z)
  generateContainers(letters: string[]) {
    return letters.map((letter) => ({
      label: letter, // La letra mayúscula será el contenedor
      matched: [] as string[], // Aseguramos que matched es un array vacío al inicio
    }));
  }

  // Baraja el array de letras
  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  // Inicializa las letras y contenedores para el nivel actual
  initializeLevel() {
    // Definimos las letras que vamos a utilizar para los contenedores en cada nivel.
    let selectedContainers: string[];

    // Rotación de letras por niveles
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // Para los primeros 26 niveles usaremos letras diferentes, pero después, rotaremos los grupos
    if (this.level <= 26) {
      // Usamos un conjunto diferente de 5 letras del abecedario
      selectedContainers = alphabet.slice((this.level - 1) * 5, this.level * 5);
    } else {
      // Para niveles superiores (27-40), podemos rotar entre grupos de 5 letras del abecedario
      const rotatedAlphabet = alphabet.concat(alphabet); // Concatenamos el abecedario con sí mismo para crear rotación
      selectedContainers = rotatedAlphabet.slice((this.level - 1) * 5, this.level * 5);
    }

    // Creamos las letras flotantes: las letras minúsculas que coinciden con los contenedores
    this.letters = selectedContainers.map(letter => letter.toLowerCase());

    // Barajamos las letras y seleccionamos un subconjunto (por ejemplo, 10 letras)
    const additionalLetters = ['q', 'e', 'y', 'u', 'o', 'p'];
    this.letters = this.shuffle(this.letters.concat(additionalLetters)).slice(0, 10);

    // Generamos los contenedores con las letras seleccionadas
    this.containers = this.generateContainers(selectedContainers);

    // Limpiamos las letras flotantes y los contenedores de letras emparejadas
    this.containers.forEach((container) => (container.matched = []));
  }

  // Permite el "drop" de letras
  allowDrop(event: DragEvent) {
    event.preventDefault(); // Permite que se pueda soltar en el contenedor
  }

  // Al iniciar el arrastre, almacenamos la letra que se está arrastrando
  onDragStart(event: DragEvent, letter: string) {
    this.draggedLetter = letter;
  }

  // Al soltar, verificamos si la letra es correcta para el contenedor
  onDrop(event: DragEvent, container: any) {
    if (this.draggedLetter) {
      // Verificamos si la letra minúscula corresponde con el contenedor mayúsculo
      const isCorrect = container.label === this.draggedLetter.toUpperCase();

      if (isCorrect) {
        if (!container.matched.includes(this.draggedLetter)) {
          container.matched.push(this.draggedLetter); // Empareja la letra con el contenedor
        }
        this.letters = this.letters.filter((letter) => letter !== this.draggedLetter); // Elimina la letra de las letras flotantes
        this.points += 5; // Ganas puntos por emparejar correctamente
      } else {
        console.warn(`La letra "${this.draggedLetter}" no pertenece al contenedor "${container.label}".`);
        this.points -= 3; // Pierdes puntos por error
      }
      this.draggedLetter = null; // Restablece la letra arrastrada
    }
  }

  // Método para validar las parejas al final del nivel
  validatePairs() {
    let correctPairs = 0;

    this.containers.forEach((container) => {
      container.matched.forEach((letter: string) => {
        // Compara la letra minúscula con el contenedor mayúsculo
        if (container.label === letter.toUpperCase()) {
          correctPairs++;
        }
      });
    });

    const totalMatched = this.containers.reduce(
      (acc, c) => acc + c.matched.length,
      0
    );

    if (totalMatched === 5) { // 5 emparejamientos correctos para completar el nivel
      // Reemplazamos la alerta por SweetAlert
      Swal.fire({
        title: '¡Nivel completado!',
        text: `¡Nivel ${this.level} completado! Avanzando al siguiente nivel.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.level++;
        this.initializeLevel(); // Reinicia con nuevas letras y contenedores
      });
    }
  }

  // Método para mostrar los puntos al final del nivel
  savePoints() {
    // Usamos SweetAlert para mostrar los puntos obtenidos
    Swal.fire({
      title: '¡Puntos obtenidos!',
      text: `¡Has ganado ${this.points} puntos!`,
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
