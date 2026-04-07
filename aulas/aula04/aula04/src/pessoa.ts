class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const p1 = new Pessoa("Ana", 20);
const p2 = new Pessoa("Carlos", 35);

console.log(p1.nome);
console.log(p2.idade);
