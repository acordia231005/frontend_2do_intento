import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../model/asignatura';
import { AsignaturaService } from '../../services/asignatura-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignatura-component',
  imports: [CommonModule],
  templateUrl: './asignatura-component.html',
  styleUrl: './asignatura-component.css',
})
export class AsignaturaComponent implements OnInit{
  public asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.obtenerAsignaturas();
  }

  constructor(private _asignaturaService: AsignaturaService){}

  obtenerAsignaturas(){
    return this._asignaturaService.findAll().subscribe(listaAsignaturas =>
      this.asignaturas = listaAsignaturas
    );
  }
  
}
