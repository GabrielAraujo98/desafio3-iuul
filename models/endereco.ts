export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade:string, uf: string){
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    get cep(){
        return this._cep;
    }

    set cep(value: string){
        this._cep = value;
    }

    get logradouro(){
        return this._logradouro;
    }

    set logradouro(value: string){
        this._logradouro = value;
    }

    get numero(){
        return this._numero;
    }

    set numero(value: string){
        this._numero = value;
    }

    get complemento(){
        return this._complemento;
    }

    set complemento(value: string){
        this._complemento = value;
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(value: string){
        this._cidade = value;
    }

    get uf(){
        return this._uf;
    }

    set uf(value: string){
        this._uf = value;
    }
}