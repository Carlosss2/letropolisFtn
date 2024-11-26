import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterStudent } from '../../models/registerStudent/register-student';

@Injectable({
  providedIn: 'root',
})
export class RegisterStudentService {
  private apiUrl = 'http://35.172.18.29:8000/auth/register/students'; // Endpoint ajustado para estudiantes

  constructor(private http: HttpClient) {}

  // Método para registrar estudiantes
  registerStudent(registerData: RegisterStudent): Observable<RegisterStudent> {
    return this.http.post<RegisterStudent>(this.apiUrl, registerData);
  }

  // Método para obtener la lista de estudiantes
  getStudents(): Observable<RegisterStudent[]> {
    return this.http.get<RegisterStudent[]>(this.apiUrl);
  }

  // Método para actualizar la información de un estudiante
  updateStudent(id: string, updatedData: Partial<RegisterStudent>): Observable<RegisterStudent> {
    return this.http.put<RegisterStudent>(`${this.apiUrl}/${id}`, updatedData);
  }

  // Método para eliminar un estudiante
  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
