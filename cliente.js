"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var pessoa_1 = require("./pessoa");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enderecos = [];
        return _this;
    }
    Object.defineProperty(Cliente.prototype, "vip", {
        get: function () {
            return this._vip;
        },
        set: function (value) {
            this._vip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "enderecos", {
        get: function () {
            return this._enderecos;
        },
        set: function (value) {
            this._enderecos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "numero", {
        get: function () {
            return this._conta.numero;
        },
        set: function (value) {
            this._conta.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "debito", {
        get: function () {
            return this._conta.debito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "credito", {
        get: function () {
            return this._conta.credito;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.adicionarEnderecos = function (endereco) {
        this._enderecos.push(endereco);
    };
    Cliente.prototype.listarEderecos = function () {
        return this._enderecos;
    };
    Cliente.prototype.autenticar = function () {
        if (this) {
            return true;
        }
        else {
            return false;
        }
    };
    return Cliente;
}(pessoa_1.Pessoa));
exports.Cliente = Cliente;
