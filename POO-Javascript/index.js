class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  conta;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Barney";
cliente1.cpf = 11100011100;

const cliente2 = new Cliente();
cliente2.nome = "Lola";
cliente2.cpf = 11111100011;

const contaCorrenteBarney = new ContaCorrente();
contaCorrenteBarney.saldo = 0;
contaCorrenteBarney.agencia = 0001;
contaCorrenteBarney.conta = 1100110;

// Operação de Depósito da Conta Corrente
console.log(contaCorrenteBarney.saldo);
contaCorrenteBarney.depositar(100);
contaCorrenteBarney.depositar(200);
contaCorrenteBarney.depositar(-1);
console.log(contaCorrenteBarney.saldo);

// Operação de Saque da Conta Corrente
contaCorrenteBarney.sacar(50);

console.log(contaCorrenteBarney.saldo);
console.log(cliente1);
