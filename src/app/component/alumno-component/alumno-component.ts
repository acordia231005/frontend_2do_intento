import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno-service';
import { Alumno } from '../../model/alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno-component',
  imports: [CommonModule],
  templateUrl: './alumno-component.html',
  styleUrl: './alumno-component.css',
})
export class AlumnoComponent implements OnInit {
  public alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  constructor(private _alumnoService: AlumnoService) { }

  obtenerAlumnos() {
    return this._alumnoService.findAll().subscribe(listaAlumnos =>
      this.alumnos = listaAlumnos
    );
  }
  
}
