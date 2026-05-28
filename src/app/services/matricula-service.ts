import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  private readonly URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getAllMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.URL}/matricula`);
  }

  getMatriculaById(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.URL}/matricula/${id}`);
  }
}
