class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number) {
        if (preco >= 0) {
            this.preco = preco
        }
    }
}

const produto1 = new Produto('Notebook', 3529);

console.log(produto1);
console.log('Nome: ', produto1.getNome());
console.log('Preço: ', produto1.getPreco());

produto1.setNome('Notebook Gamer');
produto1.setPreco(8499.90);

console.log('Nome: ', produto1.getNome());
console.log('Preço: ', produto1.getPreco());