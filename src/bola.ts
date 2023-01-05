class Bola {
  private cor: string;
  private circunferencia: number;
  private material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  public trocarCor(novaCor: string): void {
    this.cor = novaCor;
  }

  public mostrarCor(): string {
    return this.cor;
  }
}

const y = new Bola("vermelha", 45, "borracha");
console.log(y.mostrarCor()); // Imprime 'vermelha'
