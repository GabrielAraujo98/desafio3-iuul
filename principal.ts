import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { ContaCorrente } from "./contaCorrente";
import { Endereco } from "./endereco";

var cliente = new Cliente();

cliente.nome = "João";
cliente.cpf = "096.182.374-09";
cliente.telefone = "82 98832-5678";

var endereco1 = new Endereco("58058-190", "Rua Barbosa", "681", "Apartamento 608", "Rio Formoso", "RR")
var endereco2 = new Endereco("39058-190", "Rua Fidalgia", "84", "Casa", "Rio Julho", "PR")

cliente.adicionarEnderecos(endereco1);
cliente.adicionarEnderecos(endereco2);

var conta1 = new ContaCorrente()

conta1.numero = "2222";
conta1.limite = 1000.23;


console.log("Nome do Cliente " + cliente.nome);
console.log("CPF do Cliente " + cliente.cpf);
console.log("Telefone do Cliente " + cliente.telefone);
console.log("Endereços ");
console.log(cliente.listarEderecos());
console.log("Cliente existe? " + cliente.autenticar());

//console.log("Debito " + conta.depositar(500))