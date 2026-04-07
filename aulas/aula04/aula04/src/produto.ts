class Produto {
  nome: string;
  preco: number;
  estoque: number;

  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  adicionarEstoque(qtd: number): void {
    this.estoque += qtd;
  }

  removerEstoque(qtd: number): void {
    if (qtd <= this.estoque) {
      this.estoque -= qtd;
    } else {
      console.log("Quantidade indisponível em estoque.");
    }
  }

  exibirProduto(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.estoque}`);
  }
}

const produto1 = new Produto("Mouse", 89.9, 10);
produto1.adicionarEstoque(5);
produto1.removerEstoque(3);
produto1.exibirProduto();