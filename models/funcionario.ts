import { Cargo } from "./cargo";
import { IUsurario } from "./iusuario";
import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa implements IUsurario{
    private _salario: Number;
    private _cargos: Cargo[] = [];

    constructor(salario: Number, cargo: Cargo, nome: any, cpf: any, telefone: any){
        super(nome, cpf, telefone)
        this._cargos.push(cargo);
        this._salario = salario;
    }

    public get salario(){
        return this._salario;
    }

    public set salario(value: Number){
        this._salario = value;
    }

    public adicionarCargo(cargo: Cargo){
        return this._cargos.push(cargo);
    }

    autenticar() {
        if(this){
            return true;
        }else{
            return false;
        }
    }
}