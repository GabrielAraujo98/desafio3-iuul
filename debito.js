"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
var Debito = /** @class */ (function () {
    function Debito() {
    }
    Object.defineProperty(Debito.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Debito.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return Debito;
}());
exports.Debito = Debito;
