export abstract class Pessoa{

    private _nome: String;
    private _cpf: String;
    private _telefone: String;

    constructor(nome: String, cpf: String, telefone: String){
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    get nome(){
        return this._nome;
    }
    set nome(value: String){
        this._nome = value;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(value: String){
        this._cpf = value;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(value: String){
        this._telefone = value;
    }

}