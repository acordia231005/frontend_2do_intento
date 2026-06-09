import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  private _url: string = 'https://daweb-backend.onrender.com:8081';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this._url + `/matricula`);
  }

  findById(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(this._url + `/matricula/${id}`);
  }
}
