# Aula 02 — Introdução ao TypeScript (conceitos)

Este material reúne as explicações teóricas sobre **Tipos Básicos**, **Inferência vs Anotação** e **Funções e Tipos** em TypeScript, para consulta e estudo.

---

## 1) Tipos básicos em TypeScript

Em TypeScript, **tipo** é a “categoria” de dado que uma variável pode armazenar. Ao declarar (ou inferir) um tipo, o TypeScript passa a **validar** o que pode (ou não) ser atribuído àquela variável, ajudando a detectar erros **antes de executar** o código.

### 1.1 Tipos primitivos mais comuns

- **`string`**  
  Representa textos, como nomes, mensagens e descrições.

- **`number`**  
  Representa números inteiros e decimais. (Em TypeScript não existe `int` separado: tudo é `number`.)

- **`boolean`**  
  Representa valores lógicos: `true` ou `false`.

- **`null`** e **`undefined`**  
  Representam ausência de valor.  
  - `undefined`: variável não inicializada / valor não definido.  
  - `null`: “vazio intencional” (você define explicitamente como vazio).

### 1.2 Tipos úteis no dia a dia

- **Arrays tipados**  
  Permitem criar listas com um tipo único, garantindo consistência.
  - Ex.: `number[]`, `string[]`, `Array<boolean>`

- **Tuplas**  
  São “arrays com estrutura fixa”: você define quantidade e tipo por posição.  
  Muito usadas para pares/estruturas posicionais, como coordenadas.

- **`enum`**  
  Um conjunto fechado de valores nomeados. É útil para padronizar estados e evitar “strings soltas” espalhadas no código.

### 1.3 Tipos que exigem atenção

- **`any`**  
  Desativa a verificação de tipos (o TS aceita qualquer coisa).  
  Use apenas quando realmente necessário (e por pouco tempo), pois você perde segurança.

- **`unknown`**  
  É mais seguro que `any`: você pode armazenar qualquer valor, mas **precisa validar** antes de usar.  
  Útil quando dados vêm “de fora” (API, arquivo, input do usuário).

- **`void`**  
  Usado em funções que **não retornam valor**.

- **`never`**  
  Usado em funções que **nunca terminam normalmente** (ex.: sempre lançam erro, ou loop infinito).

---

## 2) Inferência vs Anotação

### 2.1 Inferência de tipos
**Inferência** é quando o TypeScript “descobre” automaticamente o tipo com base no valor atribuído.

Vantagens:
- Código mais **limpo** e rápido de escrever
- Menos repetição
- Mantém segurança: o TS impede uso incompatível depois

Quando usar inferência?
- Quando o tipo é óbvio pelo valor inicial (por exemplo: texto → `string`, número → `number`).

---

### 2.2 Anotação de tipos
**Anotação** é quando você declara explicitamente o tipo usando `: tipo`.

Vantagens:
- Mais **clareza** para quem lê o código
- Garante um “contrato” claro para variáveis e funções

Quando usar anotação?
1. **Quando você declara e só vai atribuir depois**  
2. **Quando você quer restringir o tipo** e evitar inferências “amplas demais”  
3. **Em parâmetros de função** (boa prática e padrão de projeto)  
4. **Quando o retorno da função precisa ficar explícito** (contrato/legibilidade)

---

### 2.3 Regra prática (para projetos)
- Use **inferência** quando o tipo já estiver evidente.
- Use **anotação** quando:
  - não houver valor inicial,
  - o tipo precisar ser mais restrito,
  - você estiver definindo contratos de função,
  - você quiser aumentar a legibilidade do código.

---

## 3) Funções e tipos em TypeScript

Funções são um dos pontos mais importantes para tipagem, porque nelas definimos claramente:
- **o que entra** (parâmetros)
- **o que sai** (retorno)
- **se não sai nada** (`void`)
- **se nunca finaliza normalmente** (`never`)

Tipar funções ajuda a criar um **contrato**, evitando chamadas erradas, melhorando autocompletar e tornando a refatoração mais segura.

### 3.1 Tipando parâmetros
Ao tipar os parâmetros, você garante que a função será chamada com dados do tipo correto.

Benefícios:
- Reduz bugs por entrada inválida
- Melhora autocompletar e leitura do código
- Facilita manutenção do sistema

### 3.2 Tipando retorno
Tipar o retorno define claramente **o que a função devolve**.

Quando é útil deixar explícito?
- Quando a função é parte de uma API interna do projeto
- Quando muitas pessoas trabalham no mesmo código
- Quando você quer garantir consistência (contratos e padrões)

### 3.3 `void`: funções sem retorno
Use `void` quando a função:
- executa uma ação (ex.: imprimir, logar, salvar, chamar API)
- **não devolve** um valor para uso posterior

### 3.4 `never`: funções que não finalizam normalmente
Use `never` quando a função:
- sempre lança erro (`throw`)
- ou entra em loop infinito

Por que isso importa?
- Ajuda o TypeScript a entender fluxos do programa
- Melhora validações e tratamento de erros em projetos maiores

---

## Resumo para estudo
- **Tipos básicos**: garantem coerência e previnem erros simples.
- **Inferência**: o TS deduz o tipo quando é óbvio.
- **Anotação**: você define o tipo explicitamente quando precisa de clareza e contrato.
- **Funções tipadas**: criam regras de uso, evitam chamadas erradas e deixam o projeto mais seguro.
