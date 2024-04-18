export class Debito{
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data: Date){
        this._valor = valor;
        this._data = data;
    }

    get valor(){
        return this._valor;
    }

    set valor(limite: number){
        this._valor = limite;
    }

    get data(){
        return this._data;
    }

    set data(value: Date){
        this._data = value;
    }
}