"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
var Credito = /** @class */ (function () {
    function Credito() {
    }
    Object.defineProperty(Credito.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Credito.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return Credito;
}());
exports.Credito = Credito;
