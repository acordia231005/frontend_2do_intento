import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from '../model/asignatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  private readonly URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getAllAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.URL}/asignatura`);
  }

  getAsignaturaById(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.URL}/asignatura/${id}`);
  }
}
