import { Cliente } from "./models/cliente";
import { ContaCorrente } from "./models/contaCorrente";
import { Endereco } from "./models/endereco";



var endereco1 = new Endereco("58058-190", "Rua Barbosa", "681", "Apartamento 608", "Rio Formoso", "RR")
var endereco2 = new Endereco("39058-190", "Rua Fidalgia", "84", "Casa", "Rio Julho", "PR")
var conta1 = new ContaCorrente("1111", 1500);

var cliente = new Cliente(false, endereco1, conta1, "João", "123456", "1234567");

cliente.adicionarEnderecos(endereco2);


console.log("Nome do Cliente " + cliente.nome);
console.log("CPF do Cliente " + cliente.cpf);
console.log("Telefone do Cliente " + cliente.telefone);
console.log("Endereços ");
console.log(cliente.listarEderecos());
console.log("Cliente existe? " + cliente.autenticar());
//console.log("Debito " + conta.depositar(500))