export abstract class Pessoa{

    private _nome: String;
    private _cpf: String;
    private _telefone: String;

    public get nome(){
        return this._nome;
    }
    public set nome(value: String){
        this._nome = value;
    }

    public get cpf(){
        return this._cpf;
    }

    public set cpf(value: String){
        this._cpf = value;
    }

    public get telefone(){
        return this._telefone;
    }

    public set telefone(value: String){
        this._telefone = value;
    }

}