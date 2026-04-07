public class Pessoa{
    public Pessoa(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    @Override
    public String toString(){
        return "Pessoa{nome='" + nome + "', idade=" + idade + "}";
    }

    public static void main(String[] args){
        Pessoa p1 = new Pessoa("Ana", 20);
        Pessoa p2 = new Pessoa("Carlos", 35);
        
        System.out.printf("")
    }
}