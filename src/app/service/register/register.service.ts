import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../../models/register/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://35.172.18.29:8000/auth/register/teachers'; 

  constructor(private http: HttpClient) {}

  
  registerUser(registerData: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, registerData);
  }

  
  getUsers(): Observable<Register[]> {
    return this.http.get<Register[]>(this.apiUrl);
  }

  
  updateUser(id: string, updatedData: Partial<Register>): Observable<Register> {
    return this.http.put<Register>(`${this.apiUrl}/${id}`, updatedData);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
