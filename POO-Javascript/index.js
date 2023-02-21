class Cliente {
  nome;
  cpf;
  agencia;
  conta;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Barney";
cliente1.cpf = 11100011100;
cliente1.agencia = 0001;
cliente1.conta = 1100110;
cliente1.saldo = 0;

cliente2.nome = "Lola";
cliente2.cpf = 11111100011;
cliente2.agencia = 0001;
cliente2.conta = 1111001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
