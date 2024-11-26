import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddStudentClassService {
  private apiUrl ='http://35.172.18.29:8000/students/classes'; // URL base para los endpoints de clases de estudiantes

  constructor(private http: HttpClient) {}

  // Método para agregar un estudiante a una clase
  addStudentToClass(enrollmentData: any, headers: HttpHeaders): Observable<any> {
    return this.http.post(this.apiUrl, enrollmentData, {
      headers: headers // Pasar las cabeceras correctamente
    });
  }
  

  // Método para eliminar un estudiante de una clase
  deleteStudentFromClass(studentId: number, classId: number): Observable<any> {
    let params = new HttpParams()
      .set('student_id', studentId.toString())
      .set('class_id', classId.toString());

    return this.http.delete(this.apiUrl, { params });
  }

  // Método para obtener estudiantes por ID de clase
  getStudentsByClassId(classId: number, skip: number = 0, limit: number = 100): Observable<any[]> {
    let params = new HttpParams()
      .set('skip', skip.toString())
      .set('limit', limit.toString());

    return this.http.get<any[]>(`${this.apiUrl}/${classId}`, { params });
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
