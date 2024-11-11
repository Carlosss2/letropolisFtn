import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url, { headers: this.getHeaders() });
  }

  // Obtener tarea por ID
  getTaskById(task_id: number): Observable<Task> {
    const urlApi = `${this.url}/${task_id}`;
    return this.http.get<Task>(urlApi, { headers: this.getHeaders() });
  }

  // Crear nueva tarea
  addTask(taskRequest: Task): Observable<Task> {
    return this.http.post<Task>(this.url, taskRequest, { headers: this.getHeaders() });
  }

  // Actualizar tarea existente
  updateTask(task_id: number, task: Task): Observable<Task> {
    const urlApi = `${this.url}/${task_id}`;
    return this.http.put<Task>(urlApi, task, { headers: this.getHeaders() });
  }

  // Eliminar tarea
  deleteTask(task_id: number): Observable<void> {
    const urlApi = `${this.url}/${task_id}`;
    return this.http.delete<void>(urlApi, { headers: this.getHeaders() });
  }
}
