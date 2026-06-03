import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesor-component',
  imports: [CommonModule],
  templateUrl: './profesor-component.html',
  styleUrl: './profesor-component.css',
})
export class ProfesorComponent implements OnInit{
  public profesores: Profesor[] = [];

  ngOnInit(): void {
    this.obtenerProfesores();
  }

  constructor(private _profesorService: ProfesorService){}

  obtenerProfesores() {
    return this._profesorService.findAll().subscribe(listaProfesores =>
      this.profesores = listaProfesores
    );
  }
}
