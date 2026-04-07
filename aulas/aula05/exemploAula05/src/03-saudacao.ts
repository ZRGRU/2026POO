class Saudacao {
    
    public falar(nome: string): void {
        console.log(`Olá, ${nome}!`);
    }
}

class Teste{

}

const s = new Saudacao();
s.falar("Lucas");
