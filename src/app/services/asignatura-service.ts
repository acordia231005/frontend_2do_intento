import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from '../model/asignatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  private _url: string = 'https://daweb-backend.onrender.com';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this._url + `/asignatura`);
  }

  findById(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(this._url + `/asignatura/${id}`);
  }
}
