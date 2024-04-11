import { Cargo } from "./cargo";

export class Funcionario {
    private _salario: Number;
    private _cargo: Cargo[] = [];

    public get salario(){
        return this._salario;
    }

    public set salario(value: Number){
        this._salario = value;
    }

    autenticar() {
        if(this){
            return true;
        }else{
            return false;
        }
    }
}