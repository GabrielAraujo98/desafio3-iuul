import { Conta } from "./conta";

export class ContaCorrente extends Conta{
    private _limite: Number;
    private _debitos: any = Conta;
    private _creditos: any = Conta;

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

    // calcularSaldo(): number {
    //     let creditos = 0;
    //     let debitos = 0;

    //     for(let i = 0; i < this.creditos.lentgh; i++){
    //         creditos += this._creditos[i].valor;
    //     }
    //     for(let i = 0; i < this.debitos.lentgh; i++){
    //         debitos += this._debitos[i].valor;
    //     }
    //     return creditos - debitos;
    // }
}