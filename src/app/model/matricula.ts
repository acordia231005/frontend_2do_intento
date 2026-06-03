import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {
    constructor(
        private _id:number,
        private _alumno:Alumno,
        private _asignatura:Asignatura,
        private _curso:number,
        private _notaMedia:number){}

    get id():number {return this._id;}
    set id(value:number) {this._id = value;}

    get alumno():Alumno {return this._alumno;}
    set alumno(value:Alumno) {this._alumno = value;}

    get asignatura():Asignatura {return this._asignatura;}
    set asignatura(value:Asignatura) {this._asignatura = value;}

    get curso():number {return this._curso;}
    set curso(value:number) {this._curso = value;}

    get notaMedia():number {return this._notaMedia;}
    set notaMedia(value:number) {this._notaMedia = value;}

}
