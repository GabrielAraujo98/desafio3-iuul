import { Debito } from "./debito";
import { Credito } from "./credito";

export abstract class Conta {
    private _numero: String;
    private _debitos: Debito[] = [];
    private _creditos: Credito[] = [];

    constructor(numero: String){
        this._numero = numero;
    }

    get numero(){
        return this._numero;
    }

    set numero(value: String){
        this._numero = value;
    }

    get debito(){
        return this._debitos;
    }

    get credito(){
        return this._creditos;
    }

    depositar(value: Number){
        let credito = new Credito(value, new Date());
        this._creditos.push(credito);
        return this._creditos;
    }

    sacar(value: any){
        var debito = new Debito(value, new Date());
        this._debitos.push(debito);
        return this._debitos;
    }
}