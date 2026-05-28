import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {
    private _id:number;
    private _alumno:Alumno;
    private _asignatura:Asignatura;
    private _curso:number;
    private _notaMedia:number;

    constructor(id:number,alumno:Alumno,asignatura:Asignatura,curso:number,notaMedia:number){
        this._id=id;
        this._alumno=alumno;
        this._asignatura=asignatura;
        this._curso=curso;
        this._notaMedia=notaMedia;
    }

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
