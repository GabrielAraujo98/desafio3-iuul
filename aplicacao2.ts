import { Cliente } from "./models/cliente";
import { ContaCorrente } from "./models/contaCorrente";
import { Endereco } from "./models/endereco";

//Criando os Endereços
var endereco1 = new Endereco("58058-190", "Rua Barbosa", "681", "Apartamento 608", "Rio Formoso", "RO");
var endereco2 = new Endereco("56430-001", "Av. Jefferson", "772", "Casa", "Rio Caido", "PE");
var endereco3 = new Endereco("32001-700", "Rua Nossa Senhora de Liomeira", "54", "Casa", "Riacho Cheio", "AM");

//Crianco da Conta
var conta1 = new ContaCorrente("0001", 1500.00);

//Criando o Cliente
var cliente1 = new Cliente(true, endereco1, conta1, "Augustos", "098.345.678-10", "21 99889-0807");

//Adicionando os Endereços ao cliente
cliente1.adicionarEnderecos(endereco2);
cliente1.adicionarEnderecos(endereco3);

//imprimindo os endereços do cliente
console.log(cliente1.enderecos);

