class Contador {
  private valor: number;

  constructor() {
    this.valor = 0;
  }

  public zerar(): void {
    this.valor = 0;
  }

  public incrementar(): void {
    this.valor++;
  }

  public obterValor(): number {
    return this.valor;
  }
}

const x = new Contador();
x.incrementar();

console.log(x.obterValor());
