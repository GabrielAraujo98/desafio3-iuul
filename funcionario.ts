export class Funcionario {
    private _salario: Number;

    public get salario(){
        return this._salario;
    }

    public set salario(value: Number){
        this._salario = value;
    }
}