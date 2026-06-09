import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private _url: string = 'https://daweb-backend.onrender.com:8081';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this._url + `/alumno`);
  }

  findById(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(this._url + `/alumno/${id}`);
  }
}
