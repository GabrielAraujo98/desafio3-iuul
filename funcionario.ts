import { Cargo } from "./cargo";
import { IUsurario } from "./iusuario";

export class Funcionario implements IUsurario{
    private _salario: Number;
    private _cargos: Cargo[] = [];

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