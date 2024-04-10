import { Cliente } from "./cliente";

var cliente = new Cliente();

cliente.nome = "João";
cliente.cpf = "096.182.374-09";
cliente.telefone = "82 98832-5678";

console.log("Nome do Cliente " + cliente.nome);
console.log("CPF do Cliente " + cliente.cpf);
console.log("Telefone do Cliente " + cliente.telefone);