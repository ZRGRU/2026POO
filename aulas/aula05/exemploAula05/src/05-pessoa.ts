class Pessoa{
    constructor(private nome:string, private idade:number){}

    public copiar():Pessoa{
        return new Pessoa(this.nome, this.idade);
    }

    public apresentar():string{
        return `Nome: ${this.nome}\nIdade: ${this.idade}`
    }

}

const pessoa1 = new Pessoa("Lucas", 31);

const pessoa2 = pessoa1.copiar();

console.log("Pessoa1:");
console.log(pessoa1.apresentar());
console.log("Pessoa2:");
console.log(pessoa2.apresentar());


console.log("Os objetos são iguais na memória?", pessoa1 === pessoa2);