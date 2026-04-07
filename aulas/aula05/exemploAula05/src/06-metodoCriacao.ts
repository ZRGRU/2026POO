class Usuario {
  constructor(
    private nome: string,
    private tipo: string,
  ) {}

  public static criarVisitante(): Usuario {
    return new Usuario("Visitante", "Convidado");
  }

  public static criarAdministrador(nome: string): Usuario {
    return new Usuario(nome, "Administrador");
  }

  public static criarAluno(nome: string): Usuario {
    return new Usuario(nome, "Aluno");
  }

  public criarAluno(nome: string): void {
    this.nome = nome;
  }

  public apresentar(): void {
    console.log(`Nome: ${this.nome} | Tipo: ${this.tipo}`);
  }
}

const usuario1 = Usuario.criarVisitante();
const usuario2 = Usuario.criarAdministrador("Lucas Pai");
const usuario3 = Usuario.criarAluno("Lucas Filho");

const usuario4 = new Usuario("Lucas","teste");

const usuarios = [usuario1, usuario2, usuario3, usuario4];

for (const usuario of usuarios) {
    usuario.apresentar();
}