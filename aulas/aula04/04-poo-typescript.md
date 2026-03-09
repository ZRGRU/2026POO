# Aula — Orientação a Objetos com TypeScript

## Objetivos da aula

Ao final desta aula, o estudante deverá ser capaz de:

- compreender o conceito de orientação a objetos;
- diferenciar classe e objeto;
- declarar classes em TypeScript;
- criar atributos e métodos;
- instanciar objetos com `new`;
- aplicar modificadores de acesso como `public`, `private` e `protected`.

---

## 1. Orientação a objetos

A orientação a objetos é uma técnica de programação baseada na construção e utilização de objetos.

Um objeto combina:

- **dados**, que representam seu estado ou suas características;
- **operações**, que representam seus comportamentos.

Em outras palavras, um objeto reúne informações e ações relacionadas a uma mesma responsabilidade.

Um sistema orientado a objetos é formado por um conjunto de objetos que interagem entre si para produzir os resultados desejados.

### Por que usar orientação a objetos?

A programação orientada a objetos traz diversas vantagens, entre elas:

- **organização do código**, pois cada classe possui responsabilidades bem definidas;
- **reusabilidade**, já que uma classe pode ser utilizada em diferentes situações;
- **facilidade de manutenção**, pois alterações em uma parte do sistema tendem a impactar menos as demais;
- **maior clareza**, porque o código pode representar entidades do mundo real ou conceitos do sistema.

---

## 2. Classes e objetos

Todo objeto pertence a um tipo específico. Em orientação a objetos, esse tipo é chamado de **classe**.

A classe funciona como um **modelo** para a criação de objetos. Ela descreve:

- os **atributos** da entidade;
- os **métodos** ou comportamentos da entidade.

### Exemplos de classes

Podemos pensar em várias classes do cotidiano ou de um sistema:

- `ContaCorrente`
- `Automovel`
- `Camisa`
- `Cachorro`
- `Aluno`

Cada uma dessas classes define um conjunto de características e comportamentos específicos.

### Exemplo conceitual

Em um banco, existem várias contas-corrente. Cada uma pertence a uma pessoa diferente e possui saldo e histórico próprios. No entanto, todas compartilham características e comportamentos em comum, como depositar, sacar e consultar saldo.

Nesse caso:

- **classe**: `ContaCorrente`
- **objetos**: cada conta criada a partir dessa classe

---

## 3. Declaração de classes em TypeScript

Em TypeScript, usamos a palavra-chave `class` para declarar uma classe.

### Sintaxe básica

```ts
class NomeDaClasse {
  // corpo da classe
}
```

### Exemplo

```ts
class Pessoa {
  nome: string;
  idade: number;
}
```

Nesse exemplo, a classe `Pessoa` possui dois atributos:

- `nome`, do tipo `string`;
- `idade`, do tipo `number`.

---

## 4. Variáveis de instância e criação de objetos

Depois de declarar uma classe, podemos criar objetos a partir dela. Esse processo é chamado de **instanciação**.

Em TypeScript, normalmente usamos o operador `new`.

### Exemplo simples

```ts
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

console.log(p1.nome); // Ana
console.log(p2.idade); // 35
```

### Explicação

- `class Pessoa` define o modelo;
- `constructor(...)` é o construtor da classe;
- `this.nome` e `this.idade` referem-se aos atributos do próprio objeto;
- `new Pessoa("Ana", 20)` cria um novo objeto da classe `Pessoa`.

---

## 5. Exemplo prático: classe ContaCorrente

```ts
class ContaCorrente {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  exibirSaldo(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
  }
}

const conta1 = new ContaCorrente("Marina", 1000);
conta1.depositar(250);
conta1.sacar(100);
conta1.exibirSaldo();
```

### O que observar nesse exemplo?

A classe `ContaCorrente` possui:

- **atributos**: `titular` e `saldo`;
- **métodos**: `depositar`, `sacar` e `exibirSaldo`;
- **construtor**: responsável por inicializar o objeto.

---

## 6. Denominação de classes

Ao declarar classes, recomenda-se seguir um padrão de nomenclatura.

### Boas práticas

- o nome da classe deve começar com letra maiúscula;
- em nomes compostos, cada palavra deve iniciar com letra maiúscula;
- esse padrão é conhecido como **PascalCase**.

### Exemplos corretos

```ts
class ContaCorrente {}
class AlunoSistema {}
class ProdutoLoja {}
```

### Exemplos não recomendados

```ts
class contaCorrente {}
class aluno_sistema {}
class produto1 {}
```

Embora alguns desses nomes possam funcionar, não seguem o padrão mais adequado para classes.

---

## 7. Visibilidade em TypeScript

A visibilidade, também chamada de acessibilidade, é importante porque permite controlar quais partes da classe podem ser acessadas de fora dela.

Esse controle ajuda a implementar o **encapsulamento**, que consiste em proteger os dados internos e expor apenas o que for necessário.

### Modificadores de acesso em TypeScript

TypeScript possui os seguintes modificadores principais:

- `public`
- `private`
- `protected`

> Observação: diferente de Java, TypeScript não possui o modificador de acesso de pacote (`package`). Além disso, quando nenhum modificador é informado, o membro é `public` por padrão.

### 7.1 `public`

O membro pode ser acessado livremente fora da classe.

```ts
class Aluno {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const aluno = new Aluno("João");
console.log(aluno.nome);
```

### 7.2 `private`

O membro só pode ser acessado dentro da própria classe.

```ts
class Cofre {
  private senha: string;

  constructor(senha: string) {
    this.senha = senha;
  }

  verificarSenha(tentativa: string): boolean {
    return tentativa === this.senha;
  }
}

const cofre = new Cofre("1234");
console.log(cofre.verificarSenha("1234"));
// console.log(cofre.senha); // erro: atributo privado
```

### 7.3 `protected`

O membro pode ser acessado dentro da classe e também por subclasses.

```ts
class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Cachorro extends Animal {
  latir(): void {
    console.log(`${this.nome} está latindo.`);
  }
}

const dog = new Cachorro("Rex");
dog.latir();
// console.log(dog.nome); // erro: protected não pode ser acessado fora da classe/subclasse
```

### Resumo da visibilidade

| Modificador | Acesso na própria classe | Acesso fora da classe | Acesso em subclasses |
|---|---:|---:|---:|
| `public` | Sim | Sim | Sim |
| `private` | Sim | Não | Não |
| `protected` | Sim | Não | Sim |

---

## 8. Campos (fields) ou atributos

Os campos, também chamados de atributos, são variáveis declaradas dentro da classe. Eles armazenam o estado do objeto.

### Sintaxe geral

```ts
class Exemplo {
  modificador nomeDoCampo: tipo;
}
```

### Exemplo

```ts
class Produto {
  nome: string;
  preco: number;
  estoque: number;

  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}
```

Nesse caso:

- `nome` armazena o nome do produto;
- `preco` armazena o valor do produto;
- `estoque` armazena a quantidade disponível.

---

## 9. Exemplo completo com atributos privados

Em muitos casos, não é desejável deixar todos os atributos públicos. Veja um exemplo com encapsulamento.

```ts
class ContaBancaria {
  private saldo: number;
  public titular: string;

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria("Paulo", 500);
conta.depositar(200);
console.log(conta.consultarSaldo()); // 700
console.log(conta.sacar(100)); // true
console.log(conta.consultarSaldo()); // 600
// console.log(conta.saldo); // erro: saldo é privado
```

### Vantagem desse modelo

Ao deixar `saldo` como `private`, impedimos que qualquer parte do código altere esse valor diretamente. Assim, o saldo só pode ser modificado pelos métodos da classe, o que torna o sistema mais seguro e organizado.

---

## 10. Comparando a ideia com Java

A estrutura conceitual da orientação a objetos em TypeScript é muito semelhante à de Java:

- ambas usam `class`;
- ambas permitem criar objetos com `new`;
- ambas utilizam atributos e métodos;
- ambas possuem modificadores de acesso como `public`, `private` e `protected`.

A principal diferença, neste contexto introdutório, é que TypeScript é uma linguagem amplamente usada no desenvolvimento web e adiciona tipagem estática sobre JavaScript.

---

## 11. Exemplo para executar em sala

```ts
class Carro {
  marca: string;
  modelo: string;
  velocidade: number;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar(valor: number): void {
    this.velocidade += valor;
  }

  frear(valor: number): void {
    this.velocidade -= valor;
    if (this.velocidade < 0) {
      this.velocidade = 0;
    }
  }

  exibirDados(): void {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Velocidade: ${this.velocidade} km/h`);
  }
}

const carro1 = new Carro("Toyota", "Corolla");
carro1.acelerar(50);
carro1.frear(20);
carro1.exibirDados();
```

### Perguntas para discussão

1. Qual é a classe do exemplo?
2. Quais são os atributos do objeto?
3. Quais são os métodos?
4. O que faz o construtor?
5. O que acontece quando usamos `new Carro(...)`?

---

## 12. Exercícios sugeridos

### Exercício 1
Crie uma classe `Aluno` com os atributos:

- `nome`
- `matricula`
- `notaFinal`

Implemente um método `situacao()` que informe se o aluno está aprovado ou reprovado.

### Exercício 2
Crie uma classe `Produto` com:

- `nome`
- `preco`
- `quantidade`

Implemente os métodos:

- `adicionarEstoque(qtd: number)`
- `removerEstoque(qtd: number)`
- `exibirProduto()`

### Exercício 3
Crie uma classe `Retangulo` com:

- `base`
- `altura`

Implemente os métodos:

- `calcularArea()`
- `calcularPerimetro()`

---

## 13. Conclusão

A orientação a objetos permite modelar melhor os elementos de um sistema por meio de classes e objetos.

Em TypeScript, podemos trabalhar com:

- classes;
- atributos;
- métodos;
- construtores;
- instanciação com `new`;
- controle de acesso com `public`, `private` e `protected`.

Esses conceitos são fundamentais para a construção de sistemas organizados, reutilizáveis e de fácil manutenção.

---

## 14. Exemplo final consolidado

```ts
class Pessoa {
  private idade: number;
  public nome: string;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  fazerAniversario(): void {
    this.idade++;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("Lucia", 28);
pessoa1.apresentar();
pessoa1.fazerAniversario();
pessoa1.apresentar();
```

Esse exemplo reúne os principais conceitos vistos na aula:

- declaração de classe;
- atributos públicos e privados;
- construtor;
- métodos;
- criação de objeto.
