import { Conta } from "./conta";

export class ContaCorrente extends Conta{
    private _limite: Number;

    constructor(numero: String, limite: Number){
        super(numero);
        this._limite = limite;
    }

    public get limite(){
        return this._limite;
    }

    public set limite(value: Number){
        this._limite = value;
    }

    calcularSaldo(): Number {
        let creditos: any = 0;
        let debitos: any = 0;

        for(let i = 0; i < this.credito.length; i++){
            creditos += this.credito[i].valor;
        }
        for(let i = 0; i < this.debito.length; i++){
            debitos += this.debito[i].valor;
        }
        return creditos - debitos;
    }
}