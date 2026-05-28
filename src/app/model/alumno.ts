export class Alumno {
   private _id: number;
   private _nombre: string;
   private _apellidos: string;
   private _ipasen: string;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    ipasen: string
  ) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos =apellidos;
    this._ipasen = ipasen;
  }

  get id(): number {return this._id;}
  set id(value: number) {this._id = value;}

  get nombre(): string {return this._nombre;}
  set nombre(value: string) {this._nombre = value;}

  get apellidos(): string {return this._apellidos;}
  set apellidos(value: string) {this._apellidos = value;}

  get ipasen(): string {return this._ipasen;}
  set ipasen(value: string) {this._ipasen = value;}

}
