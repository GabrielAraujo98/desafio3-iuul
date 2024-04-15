import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";
import { Conta } from "./conta";
import { IUsurario } from "./iusuario";

export class Cliente extends Pessoa implements IUsurario{

    private _vip: Boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];
    
    constructor(vip: Boolean, enderecos: Endereco, contas: Conta, nome: String, cpf: String, telefone: String){
        super(nome, cpf, telefone);
        this._vip = vip;
        this._enderecos.push(enderecos);
        this._contas.push(contas);
    }

    get vip(){
        return this._vip;
    }

    set vip(value: Boolean){
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