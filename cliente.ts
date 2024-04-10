import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";

export class Cliente extends Pessoa{

    private _vip: Boolean;
    private _enderecos: Endereco[] = [];

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

    // public listarEderecos(){
    //     for(var i = 0; i <= this.enderecos.length; i++){
    //         this.enderecos[i]
    //     }
    // }

}