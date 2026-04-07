class Conexao{
    private ativa: boolean = true;

    public fechar():void{
        this.ativa = false;
        console.log('Encerrando conexão...');
    }

    public estaAtiva():boolean{
        return this.ativa;
    }

    public exibirStatus():void{
        if (this.ativa) {
            console.log('Conexão ativa.');
        } else{
            console.log('Conexão encerrada.');
        }
    }
}

const conexao1 = new Conexao();

conexao1.exibirStatus();

console.log('Está ativa?', conexao1.estaAtiva());

conexao1.fechar();

conexao1.exibirStatus();

console.log('Está ativa?', conexao1.estaAtiva());
