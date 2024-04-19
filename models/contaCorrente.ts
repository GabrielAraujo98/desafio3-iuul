import { Conta } from "./conta";

export class ContaCorrente extends Conta{
    private _limite: number;

    constructor(numero: string, limite: number){
        super(numero);
        this._limite = limite;
    }

    get limite(){
        return this._limite;
    }

    set limite(value: any){
        this._limite += value;
    }

    calcularSaldo(): number {
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

    transferir(contaDestino: any, valor: number){
        var saldo = this.calcularSaldo();
        if(this._limite + saldo >= valor){
            contaDestino.depositar(valor);
            this.sacar(valor);
            console.log("Transferencia no valor de R$" + valor.toFixed(2) + " realizada com sucesso para a conta de número " + contaDestino.numero)
        }else{
            console.log("Limite ou Saldo Insuficiente")
        }
    }
}