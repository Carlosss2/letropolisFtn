import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeeStudentsClassService {
  private apiUrl = 'http://35.172.18.29:8000/students/classes'; // URL del endpoint

  constructor(private http: HttpClient) {}

  // Método para obtener los estudiantes por el ID de la clase
  getStudentsByClassId(classId: number, token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(`${this.apiUrl}/${classId}`, { headers });
  }
}
