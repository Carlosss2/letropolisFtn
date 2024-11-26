import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSubmissionsService {
  private baseUrl = 'http://35.172.18.29:8000/submissions'; // Cambia al URL de tu backend

  constructor(private http: HttpClient) {}

  getSubmissionsByTask(taskId: number, skip = 0, limit = 100): Observable<any> {
    return this.http.get(`${this.baseUrl}/task/${taskId}?skip=${skip}&limit=${limit}`);
  }
}
