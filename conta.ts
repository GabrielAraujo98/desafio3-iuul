import { Debito } from "./debito";
import { Credito } from "./credito";
import { ContaCorrente } from "./contaCorrente";

export abstract class Conta {
    private _numero: String;
    private _debito: any = Debito;
    private _credito: Credito;
    private _cc: ContaCorrente;

    constructor(numero: String){
        this._numero = numero;
    }

    public get numero(){
        return this._numero;
    }

    public set numero(value: String){
        this._numero = value;
    }

    public get debito(){
        return this._debito;
    }

    public set debito(contaCorrente: ContaCorrente){
        this._debito = contaCorrente.limite;
    }

    public get credito(){
        return this._credito;
    }

    public depositar(value: any){
        if(this._credito.valor == 0){
            this._credito.valor = value;
        }else{
            this._credito.valor += value;
        }
        this._cc.limite += value;
    }

    public sacar(value: any){
        if(this._debito.valor <= 0){
            console.log("Saldo insuficiente!")
        }else{
            this._debito.valor =- value;
        }
    }

    // calcularSaldo(): number {
    //     let creditos = 0;
    //     let debitos = 0;

    //     for(let i = 0; i < this._credito.lentgh; i++){
    //         creditos += this._credito[i].valor;
    //     }
    //     for(let i = 0; i < this.debito.lentgh; i++){
    //         debitos += this._debito[i].valor;
    //     }
    //     return creditos - debitos;
    // }
}