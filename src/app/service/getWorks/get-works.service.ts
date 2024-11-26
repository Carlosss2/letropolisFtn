import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWorksService {

  private apiUrl = 'http://35.172.18.29:8000/tasks/classes/100';  // URL de la API para obtener tareas de la clase 100

  constructor(private http: HttpClient) { }

  // Método para obtener las tareas de la clase con ID 100
  getTasksByClassId(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Realiza la solicitud GET
  }
}
