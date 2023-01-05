class Calculadora {
  private historico: string[];

  constructor() {
    this.historico = [];
  }

  public somar(a: number, b: number): number {
    const resultado = a + b;
    this.historico.push(`${a} + ${b} = ${resultado}`);
    return resultado;
  }

  public multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.historico.push(`${a} * ${b} = ${resultado}`);
    return resultado;
  }

  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    const resultado = a / b;
    this.historico.push(`${a} / ${b} = ${resultado}`);
    return resultado;
  }

  public diminuir(a: number, b: number): number {
    const resultado = a - b;
    this.historico.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  }

  public visualizarHistorico(): string[] {
    return this.historico;
  }
}

const soma = new Calculadora();

soma.somar(2, 2);

console.log(soma.visualizarHistorico());
