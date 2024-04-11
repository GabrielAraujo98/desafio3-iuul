export abstract class Conta {
    private _numero: String;

    public get numero(){
        return this._numero;
    }

    public set numero(value: String){
        this._numero = value;
    }
}