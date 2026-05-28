import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private readonly URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getAllAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.URL}/alumno`);
  }

  getAlumnoById(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.URL}/alumno/${id}`);
  }
}
