import { Cliente } from "./models/cliente";
import { ContaCorrente } from "./models/contaCorrente";
import { ContaPoupanca } from "./models/contaPoupanca";
import { Endereco } from "./models/endereco";


//Criando os Endereços
const endereco1 = new Endereco("88888-999", "Av. Presidente Magalhãesa", "90", "Apto 2001", "São Bernardo", "CE");
const endereco2 = new Endereco("12345-789", "Rua das Pereiras", "1", "Casa", "Riacho Estreito", "RN");

//Crianco da Conta Corrente
let conta1 = new ContaCorrente("0003", 0);

//Criacao da Conta Poupanca
let conta2 = new ContaPoupanca("0004")

//Criando o Cliente da Conta Corrente
let cliente1 = new Cliente(true, endereco1, conta1, "Victorino", "012.456.890-23", "85 99111-0101");

//Criando o Cliente da Conta Poupança
let cliente2 = new Cliente(true, endereco2, conta2, "Maria Clara", "001.002.003-04", "84 99444-0343");

//Efetuando o Deposito do Primeiro Criente
cliente1.contas[0].depositar(1000.00);

//Atualizando o Limite da Conta Corrente
conta1.limite = conta1.calcularSaldo();

//Efetuando o Deposito do segundo cliente
cliente2.contas[0].depositar(1000.00);

//Efetuando a Transferencia da Conta Corrente para a Conta Poupança
conta1.transferir(cliente2.contas[0], 500.00);

//Imprimindo Saldo das Contas
console.log(conta1.calcularSaldo())
console.log(conta2.calcularSaldo())