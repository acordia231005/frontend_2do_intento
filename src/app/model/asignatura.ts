import { Profesor } from "./profesor";

export class Asignatura {

    constructor(
        private _id:number,
        private _nombre:string,
        private _horas:string,
        private _profesor:Profesor
    ){}

    get id():number {return this._id;}
    set id(value:number) {this._id = value;}

    get nombre():string {return this._nombre;}
    set nombre(value:string) {this._nombre = value;}

    get horas():string {return this._horas;}
    set horas(value:string) {this._horas = value;}

    get profesor():Profesor {return this._profesor;}
    set profesor(value:Profesor) {this._profesor = value;}

}
