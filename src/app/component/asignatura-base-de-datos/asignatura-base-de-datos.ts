import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../model/asignatura';
import { AsignaturaService } from '../../services/asignatura-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-asignatura-base-de-datos',
  imports: [CommonModule, RouterModule],
  templateUrl: './asignatura-base-de-datos.html',
  styleUrl: './asignatura-base-de-datos.css',
})
export class AsignaturaBaseDeDatos implements OnInit{
  public asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.obtenerAsignaturaBaseDeDatos();
  }

  constructor(private _asignaturaService: AsignaturaService) { }

  obtenerAsignaturaBaseDeDatos() {
    return this._asignaturaService.findAll().subscribe(asignaturaBasededatos => {
      this.asignaturas = asignaturaBasededatos.filter(a => a.profesor.especialidad.toLowerCase() === "base de datos")
    }
    )
  }
}
