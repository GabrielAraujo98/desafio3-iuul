import { Cliente } from "./models/cliente";
import { ContaCorrente } from "./models/contaCorrente";
import { Endereco } from "./models/endereco";

//Criando o Primeiro Endereço
const endereco1 = new Endereco("10101-101", "Rua Governador Givanildo Segundo", "1467", "Sala 203", "São Vicente Cristiano", "GO");

//Crianco da Primeira Conta Corrente
let conta1 = new ContaCorrente("0005", 0);

//Criando o Primeiro Cliente
let cliente1 = new Cliente(true, endereco1, conta1, "Joana Dandara", "011.100.001-11", "24 99000-0000");

//Efetuando Deposito na Primeira Conta
cliente1.contas[0].depositar(300);

//Ajustando o Limite da Primeira Conta
conta1.limite = 100;

//Criando o Segundo Endereço
const endereco2 = new Endereco("11011-110", "Rua Carlos Bicudos", "500", "Sala 101", "São Vicente Cristiano", "GO");

//Criacao da Segunda Conta Corrente
let conta2 = new ContaCorrente("0006", 0);

//Criando o Segundo Cliente
let cliente2 = new Cliente(true, endereco2, conta2, "Carla Silveira", "001.001.111-11", "84 99010-1110");

//Efetuando Deposito na Segunda Conta
cliente2.contas[0].depositar(100);

//Efetuando a Transferencia da Primeira Conta para a Segunda Conta
conta1.transferir(cliente2.contas[0], 1000.00);