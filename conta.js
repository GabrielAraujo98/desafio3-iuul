"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var debito_1 = require("./debito");
var Conta = /** @class */ (function () {
    function Conta() {
        this._debito = debito_1.Debito;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "debito", {
        get: function () {
            return this._debito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "credito", {
        get: function () {
            return this._credito;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.depositar = function (value) {
        var valor = value;
        var debito = this._debito.valor;
        var soma = (debito + valor);
        this._debito = soma;
        console.log(this._debito);
    };
    Conta.prototype.sacar = function (value) {
        var valor = value;
        var debito = this._debito.valor;
        var diferença = (debito - valor);
        this._debito = diferença;
        console.log(this._debito);
    };
    return Conta;
}());
exports.Conta = Conta;
