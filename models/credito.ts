export class Credito{
    private _valor: Number;
    private _data: Date;

    constructor(valor: Number, data: Date){
        this._valor = valor;
        //this._data = data;
    }

    get valor(){
        return this._valor;
    }

    set valor(value: Number){
        this._valor = value;
    }

    get data(){
        return this._data;
    }

    set data(value: Date){
        this._data = value;
    }
}