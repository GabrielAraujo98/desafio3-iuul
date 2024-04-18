export class Endereco {
    private _cep: String;
    private _logradouro: String;
    private _numero: String;
    private _complemento: String;
    private _cidade: String;
    private _uf: String;

    constructor(cep: String, logradouro: String, numero: String, complemento: String, cidade:String, uf: String){
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

    set cep(value: String){
        this._cep = value;
    }

    get logradouro(){
        return this._logradouro;
    }

    set logradouro(value: String){
        this._logradouro = value;
    }

    get numero(){
        return this._numero;
    }

    set numero(value: String){
        this._numero = value;
    }

    get complemento(){
        return this._complemento;
    }

    set complemento(value: String){
        this._complemento = value;
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(value: String){
        this._cidade = value;
    }

    get uf(){
        return this._uf;
    }

    set uf(value: String){
        this._uf = value;
    }
}