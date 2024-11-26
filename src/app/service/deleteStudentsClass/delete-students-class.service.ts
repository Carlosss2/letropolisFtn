import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteStudentsClassService {
  private apiUrl = 'http://35.172.18.29:8000/students/classes'; // Ajusta la URL de la API según sea necesario

  constructor(private http: HttpClient) {}

  // Método para eliminar un estudiante de la clase
  deleteStudentFromClass(studentId: number, classId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}?student_id=${studentId}&class_id=${classId}`, { headers });
  }
  
}
