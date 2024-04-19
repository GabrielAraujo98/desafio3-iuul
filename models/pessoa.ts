export abstract class Pessoa{

    private _nome: string;
    private _cpf: string;
    private _telefone: string;

    constructor(nome: string, cpf: string, telefone: string){
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    get nome(){
        return this._nome;
    }
    set nome(value: string){
        this._nome = value;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(value: string){
        this._cpf = value;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(value: string){
        this._telefone = value;
    }

}