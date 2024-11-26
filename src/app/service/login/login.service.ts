import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '../../models/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://35.172.18.29:8000/auth/login/teachers'; 

  constructor(private http: HttpClient) {}

  
  loginUser(loginData: Login): Observable<{ access_token: string }> {
    return this.http.post<any>(this.apiUrl, loginData).pipe(
      tap((response) => {
        console.log('Respuesta del servidor:', response);
        const token = response.access_token;
        if (token) {
          localStorage.setItem('access_token', token);
          console.log('Token almacenado:', token);
        } else {
          console.error('El token no fue encontrado en la respuesta.');
        }
      })
    );
  }
  

  
  logoutUser(): void {
    localStorage.removeItem('authToken');
  }

  // Método para almacenar el token en el localStorage
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verifica si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
