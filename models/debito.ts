export class Debito{
    private _valor: Number;
    private _data: Date;

    public get valor(){
        return this._valor;
    }

    public set valor(limite: Number){
        this._valor = limite;
    }

    public get data(){
        return this._data;
    }

    public set data(value: Date){
        this._data = value;
    }
}