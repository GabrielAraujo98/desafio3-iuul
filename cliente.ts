import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";
import { Conta } from "./conta";
import { IUsurario } from "./iusuario";

export class Cliente extends Pessoa implements IUsurario{

    private _vip: Boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];

    public get vip(){
        return this._vip;
    }

    public set vip(value: Boolean){
        this._vip = value;
    }

    public get enderecos(){
        return this._enderecos
    }

    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public adicionarEnderecos(endereco: Endereco){
        this._enderecos.push(endereco);        
    }

    public listarEderecos(){
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

    public get contas(){
        return this._contas
    }

    public set contas(value: Conta[]) {
        this._contas = value;
    }

    public adicionarContas(conta: Conta){
        this._contas.push(conta);        
    }

}