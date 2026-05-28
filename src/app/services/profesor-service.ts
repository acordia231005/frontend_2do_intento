import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private readonly URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getAllProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${this.URL}/profesor`);
  }

  getProfesorById(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.URL}/profesor/${id}`);
  }
}
