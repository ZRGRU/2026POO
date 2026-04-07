import { ContaBancaria } from "./contaBancaria";

const conta = new ContaBancaria(1000);

conta.depositar = 500;
conta.sacar(125.5);

conta.obterSaldo;