import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatriculaService } from '../../services/matricula-service';
import { Matricula } from '../../model/matricula';
import { Asignatura } from '../../model/asignatura';

@Component({
  selector: 'app-alumnopor-primeraletra',
  imports: [CommonModule, RouterModule],
  templateUrl: './alumnopor-primeraletra.html',
  styleUrl: './alumnopor-primeraletra.css',
})
export class AlumnoporPrimeraletra implements OnInit {
  public alumnos: Alumno[] = [];
  public matriculas: Matricula[] = [];

  ngOnInit(): void {
    this.obtenerAlumnospora();
    this.obtenerMatriculas();
  }

  constructor(private _alumnoService: AlumnoService, private _matriculaservice: MatriculaService) { }

  obtenerAlumnospora() {
    return this._alumnoService.findAll().subscribe(listaAlumnos =>
      this.alumnos = listaAlumnos.filter(a => a.nombre.toLowerCase().startsWith("a"))
    );
  }

  obtenerMatriculas() {
    return this._matriculaservice.findAll().subscribe(listaMatricula =>
      this.matriculas = listaMatricula
    );
  }

  obtenerDeLosAlumnosQueEmpiezanPorA(alumno: Alumno) {
    return this.matriculas.filter(m => m.alumno = alumno).map(
      m => m.asignatura.nombre
    );
  }

}
