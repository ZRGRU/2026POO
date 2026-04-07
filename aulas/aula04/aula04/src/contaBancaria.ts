export class ContaBancaria {
  private saldo: number;

  constructor(valorInicial:number){
    this.saldo = valorInicial;
  }

  get obterSaldo(): number {
    return this.saldo;
  }

  set depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.log("Valor de depósito inválido!");
    }
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo inválido!");
    }
  }
}
