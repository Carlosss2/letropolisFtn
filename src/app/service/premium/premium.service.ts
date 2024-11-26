import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para los datos de Premium
interface Premium {
  id: number;
  student_id: number;
  is_active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  private apiUrl = 'http://35.172.18.29:8000/premium'; // Reemplaza esto con la URL de tu API de FastAPI

  constructor(private http: HttpClient) { }

  // Método para crear un premium
  createPremium(premiumData: { student_id: number, is_active: boolean }): Observable<Premium> {
    return this.http.post<Premium>(this.apiUrl, premiumData);
  }

  // Método para obtener el premium por student_id
  getPremiumByStudent(studentId: number): Observable<Premium> {
    return this.http.get<Premium>(`${this.apiUrl}/${studentId}`);
  }
}
