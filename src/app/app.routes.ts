import { Routes } from '@angular/router';
import { AlumnoComponent } from './component/alumno-component/alumno-component';
import { ProfesorComponent } from './component/profesor-component/profesor-component';
import { AsignaturaComponent } from './component/asignatura-component/asignatura-component';
import { MatriculaComponent } from './component/matricula-component/matricula-component';
import { MatriculasNotaMayor7 } from './component/matriculas-nota-mayor7/matriculas-nota-mayor7';
import { AsignaturaBaseDeDatos } from './component/asignatura-base-de-datos/asignatura-base-de-datos';

export const routes: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'asignatura', component: AsignaturaComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'matriculas-nota-mayor7', component: MatriculasNotaMayor7 },
    { path: 'asignatura-base-de-datos', component: AsignaturaBaseDeDatos }
];
