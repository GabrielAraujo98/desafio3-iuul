import { Cliente } from "./models/cliente";
import { ContaCorrente } from "./models/contaCorrente";
import { Endereco } from "./models/endereco";

//Criando os Endereços
const endereco1 = new Endereco("50000-000", "Rua Bezerra", "1", "Casa", "Rio das Cobras", "PB");

//Crianco da Conta
const conta1 = new ContaCorrente("0002", 0);

//Criando o Cliente
let cliente1 = new Cliente(true, endereco1, conta1, "André", "088.375.608-13", "81 99999-0909");

//Efetuando depositos
cliente1.contas[0].depositar(100.00);
cliente1.contas[0].depositar(100.00);
cliente1.contas[0].depositar(100.00);

//Efetuando saques
cliente1.contas[0].sacar(50.00);

//Exibindo saldo da conta
console.log(conta1.calcularSaldo());