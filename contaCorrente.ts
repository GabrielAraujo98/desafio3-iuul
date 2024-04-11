import { Conta } from "./conta";

export class ContaCorrente extends Conta{
    private _limite: Number;

    public get limite(){
        return this._limite;
    }

    public set limite(value: Number){
        this._limite = value;
    }
}