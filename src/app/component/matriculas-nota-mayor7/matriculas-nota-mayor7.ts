import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriculas-nota-mayor7',
  imports: [CommonModule],
  templateUrl: './matriculas-nota-mayor7.html',
  styleUrl: './matriculas-nota-mayor7.css',
})
export class MatriculasNotaMayor7 implements OnInit {
  public matriculas: Matricula[] = [];

  ngOnInit(): void {
    this.obtenerMatriculasMayor7();
  }

  constructor(private _matriculaService: MatriculaService) { }

  obtenerMatriculasMayor7() {
    return this._matriculaService.findAll().subscribe( matriculamayor7 => {
        this.matriculas = matriculamayor7.filter(m => m.notaMedia >= 7)
      }
    )
  }
}
