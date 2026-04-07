class Saudacao2 {
    public exibir(nome: string): void;
    public exibir(nome: string, titulo: string): void;

    public exibir(nome: string, titulo?: string): void {
        if (titulo) {
            console.log(`Olá, ${titulo} ${nome}`);
        } else {
            console.log(`Olá, ${nome}`)
        }
    }
}

const s2 = new Saudacao2();
s2.exibir("Lucas");
s2.exibir("Lucas", "Professor");