import { Routes } from '@angular/router';
import { AlumnoComponent } from './component/alumno-component/alumno-component';
import { ProfesorComponent } from './component/profesor-component/profesor-component';
import { AsignaturaComponent } from './component/asignatura-component/asignatura-component';
import { MatriculaComponent } from './component/matricula-component/matricula-component';

export const routes: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'asignatura', component: AsignaturaComponent },
    { path: 'matricula', component: MatriculaComponent }
];
