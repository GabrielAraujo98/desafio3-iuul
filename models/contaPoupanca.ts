import { Conta } from "./conta";

export class ContaPoupanca extends Conta{

    constructor(numero: String){
        super(numero);
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