class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  conta;
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
    }
  }
  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
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
contaCorrenteBarney.agencia = 0001;
contaCorrenteBarney.conta = 1100110;

// Operação de Depósito da Conta Corrente
contaCorrenteBarney.depositar(100);

// Operação de Saque da Conta Corrente
contaCorrenteBarney.sacar(50);

console.log(contaCorrenteBarney);
