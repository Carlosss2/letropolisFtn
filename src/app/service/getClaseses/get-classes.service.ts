import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddClassTeacher } from '../../models/addClassTeacher/add-class-teacher'; // Importamos la interfaz
@Injectable({
  providedIn: 'root'
})
export class GetClassesService {

  private apiUrl = "http://35.172.18.29:8000/classes/professor"; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  
  getClassesByProfessor(headers: HttpHeaders): Observable<AddClassTeacher[]> {
    return this.http.get<AddClassTeacher[]>(`${this.apiUrl}/professor`, { headers });
  }

}
