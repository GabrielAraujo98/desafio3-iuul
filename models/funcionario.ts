import { Cargo } from "./cargo";
import { IUsurario } from "./iusuario";
import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa implements IUsurario{
    private _salario: number;
    private _cargos: Cargo[] = [];

    constructor(salario: number, cargo: Cargo, nome: string, cpf: string, telefone: string){
        super(nome, cpf, telefone)
        this._cargos.push(cargo);
        this._salario = salario;
    }

    get salario(){
        return this._salario;
    }

    set salario(value: number){
        this._salario = value;
    }

    adicionarCargo(cargo: Cargo){
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