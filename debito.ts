export class Debito{
    private _valor: Number;
    private _data: Date;

    public get valor(){
        return this._valor;
    }

    public set valor(value: Number){
        this._valor = value;
    }

    public get data(){
        return this._data;
    }

    public set data(value: Date){
        this._data = value;
    }
}