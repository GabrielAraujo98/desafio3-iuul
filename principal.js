"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var cliente = new cliente_1.Cliente();
cliente.nome = "João";
cliente.cpf = "096.182.374-09";
cliente.telefone = "82 98832-5678";
console.log("Nome do Cliente " + cliente.nome);
console.log("CPF do Cliente " + cliente.cpf);
console.log("Telefone do Cliente " + cliente.telefone);
