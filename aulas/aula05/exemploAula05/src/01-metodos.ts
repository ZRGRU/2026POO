class Calculadora {
  public somar(a: number, b: number): number {
    return a + b;
  }

  public subtrair(a: number, b: number): number {
    return a - b;
  }

  public exibirMensagem(): void {
    console.log("Executando operação...");
  }
}

const calc = new Calculadora();
calc.exibirMensagem();
console.log("Soma:", calc.somar(10, 5));
console.log("Subtração:", calc.subtrair(10, 5));
