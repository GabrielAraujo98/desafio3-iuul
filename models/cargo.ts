export class Cargo{
    private _nome: string;

    constructor(nome: string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(value: string){
        this._nome = value;
    }
}