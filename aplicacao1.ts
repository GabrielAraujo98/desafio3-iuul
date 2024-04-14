import { Funcionario } from "./models/funcionario";
import { Cargo } from "./models/cargo";

//Criando Cargos
var gerente = new Cargo("Gerente");
var atendente = new Cargo("Atendente");

//Criando Funcionarios
var Funcionario1 = new Funcionario(10000.00, gerente, "Ivanildo", "12345678901", "82 99734-5464");
var Funcionario2 = new Funcionario(1500.00, atendente, "Cláudio", "10987654321", "11 98727-6757");

//Imprimindo os Funcionarios criados
console.log(Funcionario1, "Funcionário " + Funcionario1.nome + "existe? " + Funcionario1.autenticar());
console.log(Funcionario2, "Funcionário " + Funcionario2.nome + "existe? " + Funcionario1.autenticar());