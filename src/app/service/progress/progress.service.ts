import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Progress {
  student_id: string;
  counter_point: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'http://35.172.18.29:8000/progress';  // Cambia esto por la URL de tu servidor FastAPI

  constructor(private http: HttpClient) { }

 
  // Obtener todos los progresos
  getProgresses(): Observable<Progress[]> {
    return this.http.get<Progress[]>(`${this.apiUrl}/all`);
  }

  // Crear un nuevo progreso
  createProgress(progressData: { student_id: number, counter_point: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, progressData);  // Asumiendo que el servidor acepta POST en /progress
  }

  // Obtener un progreso por ID
  getProgressById(progressId: string): Observable<Progress> {
    return this.http.get<Progress>(`${this.apiUrl}/${progressId}`);
  }

  // Eliminar un progreso
  deleteProgress(progressId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${progressId}`);
  }
}
