class BombaCombustivel {
  private tipoCombustivel: string;
  private valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  public abastecerPorValor(valor: number): number {
    if (valor > this.valorLitro * this.quantidadeCombustivel) {
      throw new Error("Quantidade de combustível insuficiente na bomba");
    }
    const litros = valor / this.valorLitro;
    this.quantidadeCombustivel -= litros;
    return litros;
  }

  public abastecerPorLitro(litros: number): number {
    if (litros > this.quantidadeCombustivel) {
      throw new Error("Quantidade de combustível insuficiente na bomba");
    }
    const valor = litros * this.valorLitro;
    this.quantidadeCombustivel -= litros;
    return valor;
  }

  public alterarValor(novoValor: number): void {
    this.valorLitro = novoValor;
  }

  public alterarCombustivel(novoTipo: string): void {
    this.tipoCombustivel = novoTipo;
  }

  public alterarQuantidadeCombustivel(novaQuantidade: number): void {
    this.quantidadeCombustivel = novaQuantidade;
  }
}
const shell = new BombaCombustivel("Gasolina", 4, 300);

shell.abastecerPorLitro(20);
console.log(shell);
