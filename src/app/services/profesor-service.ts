import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private _url: string = 'https://daweb-backend.onrender.com';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this._url + '/profesor');
  }

  findById(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(this._url + `/profesor/${id}`);
  }
}
