class carro {
  consumo: number;
  nivelCombustivel: number;

  constructor(consumo: number, nivelCombustivel: number) {
    this.consumo = consumo;
    this.nivelCombustivel = nivelCombustivel;
  }

  andar(distancia: number): void {
    const result = distancia / this.consumo;
    this.nivelCombustivel -= result;
  }

  obterGasolina(): number {
    return this.nivelCombustivel;
  }

  addGasolina(quantidade: number): void {
    this.nivelCombustivel += quantidade;
  }
}

const fiesta = new carro(4.5, 0);

fiesta.addGasolina(30);

fiesta.andar(16);

console.log(fiesta);
