import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostSubmissionsService {

  private apiUrl = 'http://35.172.18.29:8000/submissions';  // Cambia la URL según tu configuración

  constructor(private http: HttpClient) {}

  // Subir la imagen y recibir la URL
  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image, image.name);

    // Aquí se usa comillas invertidas para interpolar correctamente la URL
    return this.http.post<any>(`${this.apiUrl}`, formData, {
      headers: new HttpHeaders(),
    });
  }

  // Crear la tarea con la URL de la imagen
  createSubmission(submissionData: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.post<any>(`${this.apiUrl}/submissions/`, submissionData, { headers });
  }

}
