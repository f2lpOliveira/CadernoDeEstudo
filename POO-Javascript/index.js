import { Cliente } from "./componentes/Cliente.js";
import { ContaCorrente } from "./componentes/ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Barney";
cliente1.cpf = 11100011100;

const cliente2 = new Cliente();
cliente2.nome = "Lola";
cliente2.cpf = 11111100011;

const contaCorrenteBarney = new ContaCorrente();
contaCorrenteBarney.agencia = "0001";
contaCorrenteBarney.conta = "1100110";

// Operação de Depósito da Conta Corrente
contaCorrenteBarney.depositar(100);

// Operação de Saque da Conta Corrente
const valorSacado = contaCorrenteBarney.sacar(75);
console.log(valorSacado);

console.log(contaCorrenteBarney);
