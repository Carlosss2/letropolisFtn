import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Importar HttpHeaders
import { Observable } from 'rxjs';
import { PostWork } from '../../models/postWork/post-work'; // Importa el modelo

@Injectable({
  providedIn: 'root'
})
export class PostWorkService {

  private apiUrl = 'http://35.172.18.29:8000/tasks/'; // URL de la API (ajústala según tu backend)

  constructor(private http: HttpClient) {}

  // Método para obtener el token de autenticación desde el almacenamiento local (por ejemplo)
  private getAuthToken(): string | null {
    return localStorage.getItem('authToken'); // O usa otro mecanismo para obtener el token
  }

  // Método para configurar los encabezados con el token de autenticación
  private getHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`); // Agregar el token en los encabezados
    }

    return headers;
  }

  // Método para obtener todos los trabajos
  getPostWorks(): Observable<PostWork[]> {
    const headers = this.getHeaders(); // Obtener los encabezados con el token
    return this.http.get<PostWork[]>(this.apiUrl, { headers }); // Incluir los encabezados en la solicitud
  }

  // Método para agregar un nuevo trabajo
  addPostWork(postWork: PostWork, token: string): Observable<PostWork> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<PostWork>(this.apiUrl, postWork, { headers });
  }
  

  // Método para actualizar un trabajo
  updatePostWork(postWork: PostWork): Observable<PostWork> {
    const headers = this.getHeaders(); // Obtener los encabezados con el token
    if (!postWork.act_number) {
      console.error('El act_number no está presente en el objeto PostWork:', postWork);
    }
    return this.http.put<PostWork>(`${this.apiUrl}${postWork.act_number}/`, postWork, { headers });
  }
  



  // Método para eliminar un trabajo
  deletePostWork(act_number: number): Observable<void> {
    const headers = this.getHeaders(); // Obtener los encabezados con el token
    return this.http.delete<void>(`${this.apiUrl}/${act_number}`, { headers }); // Incluir los encabezados en la solicitud
  }
}
