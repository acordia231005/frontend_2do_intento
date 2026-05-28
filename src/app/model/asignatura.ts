import { Profesor } from "./profesor";

export class Asignatura {
    private _id:number;
    private _nombre:string;
    private _horas:string;
    private _imparte:Profesor;

    constructor(id:number,nombre:string,horas:string,imparte:Profesor){
        this._id=id;
        this._nombre=nombre;
        this._horas=horas;
        this._imparte=imparte;
    }

    get id():number {return this._id;}
    set id(value:number) {this._id = value;}

    get nombre():string {return this._nombre;}
    set nombre(value:string) {this._nombre = value;}

    get horas():string {return this._horas;}
    set horas(value:string) {this._horas = value;}

    get imparte():Profesor {return this._imparte;}
    set imparte(value:Profesor) {this._imparte = value;}

}
