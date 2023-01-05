class conta {
  private numeroDaConta: number;
  private nomeDoCorrentista: string;
  private saldo: number;

  constructor(numeroDaConta: number, nomeDoCorrentista: string, saldo: number) {
    this.numeroDaConta = numeroDaConta;
    this.nomeDoCorrentista = nomeDoCorrentista;
    this.saldo = saldo;
  }

  alterarNome(novoNomeDoCorrentista: string): void {
    this.nomeDoCorrentista = novoNomeDoCorrentista;
  }

  deposito(valorDeposito: number): void {
    this.saldo += valorDeposito;
  }

  saque(valorSacado: number): void {
    this.saldo -= valorSacado;
    if (valorSacado > this.saldo) {
      throw new Error("Saldo insuficiente para realizar saque");
    }
  }
}

const joão = new conta(9991, "João Cardoso", 2000);

joão.deposito(200);
joão.saque(300);

const alex = new conta(6000, "Alex Teixeira", 4700);

console.log(joão);
console.log(alex);
