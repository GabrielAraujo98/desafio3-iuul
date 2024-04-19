import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";
import { Conta } from "./conta";
import { IUsurario } from "./iusuario";

export class Cliente extends Pessoa implements IUsurario{

    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];
    
    constructor(vip: boolean, enderecos: Endereco, contas: Conta, nome: string, cpf: string, telefone: string){
        super(nome, cpf, telefone);
        this._vip = vip;
        this._enderecos.push(enderecos);
        this._contas.push(contas);
    }

    get vip(){
        return this._vip;
    }

    set vip(value: boolean){
        this._vip = value;
    }

    get enderecos(){
        return this._enderecos
    }

    set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    adicionarEnderecos(endereco: Endereco){
        this._enderecos.push(endereco);        
    }

    listarEderecos(){
        return this._enderecos;
    }

    autenticar() {
        if(this){
            return true;
        }else{
            return false;
        }
    }

    //Conta
    get contas(){
        return this._contas
    }

    adicionarContas(conta: Conta){
        this._contas.push(conta);        
    }

}