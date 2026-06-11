import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnopor-primeraletra',
  imports: [CommonModule, RouterModule],
  templateUrl: './alumnopor-primeraletra.html',
  styleUrl: './alumnopor-primeraletra.css',
})
export class AlumnoporPrimeraletra implements OnInit {
  public alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  constructor(private _alumnoService: AlumnoService) { }

  obtenerAlumnos() {
    return this._alumnoService.findAll().subscribe(listaAlumnos =>
      this.alumnos = listaAlumnos.filter(a => a.nombre.toLowerCase().startsWith("a"))
    );
  }
}
