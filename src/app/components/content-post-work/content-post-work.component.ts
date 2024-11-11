import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // importar el módulo de FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-content-post-work',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './content-post-work.component.html',
  styleUrls: ['./content-post-work.component.scss']
})
export class ContentPostWorkComponent {
  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: [
      // Aquí puedes agregar eventos predeterminados si lo deseas
      { title: 'Tarea de Ejemplo', date: '2024-11-15' },
    ]
  };
}
