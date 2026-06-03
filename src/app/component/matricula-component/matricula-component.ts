import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matricula-component',
  imports: [CommonModule],
  templateUrl: './matricula-component.html',
  styleUrl: './matricula-component.css',
})
export class MatriculaComponent implements OnInit {
  public matriculas: Matricula[] = [];

  ngOnInit(): void {
    this.obtenerMatriculas();
  }

  constructor(private _matriculaService: MatriculaService) { }

  obtenerMatriculas() {
    return this._matriculaService.findAll().subscribe(listaMatricula =>
      this.matriculas = listaMatricula
    );
  }
}
