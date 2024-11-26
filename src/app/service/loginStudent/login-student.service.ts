import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { LoginStudent } from '../../models/loginStudent/login-student';

@Injectable({
  providedIn: 'root',
})
export class LoginStudentService {
  private apiUrl = 'http://35.172.18.29:8000/auth/login/students'; // Cambiado para estudiantes

  constructor(private http: HttpClient) {}

  // Métodos de autenticación
  loginStudent(loginData: LoginStudent): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(this.apiUrl, loginData).pipe(
      tap((response) => {
        console.log('Respuesta del servidor:', response);
        const token = response.access_token ;
        if (token) {
          localStorage.setItem('access_token', token);
          console.log('Token almacenado:', token);
        } else {
          console.error('El token no fue encontrado en la respuesta.');
        }}),
      catchError((error) => {
        console.error('Error al autenticar al estudiante:', error);
        throw error; // Puedes manejar el error aquí si lo deseas
      })
    );
  }

  // Métodos de cierre de sesión
  logoutStudent(): void {
    localStorage.removeItem('studentToken');
  }

  // Métodos para manejo de tokens
  storeStudentToken(token: string): void {
    localStorage.setItem('studentToken', token);
  }

  getStudentToken(): string | null {
    return localStorage.getItem('studentToken');
  }

  // Métodos de estado del usuario
  isStudentLoggedIn(): boolean {
    return !!this.getStudentToken();
  }
}
