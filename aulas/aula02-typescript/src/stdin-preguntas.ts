// Importa o módulo readline do Node.js, que permite ler entradas do usuário pelo terminal.
import readline from "node:readline";

// Importa stdin (entrada padrão) e stdout (saída padrão) do processo atual do Node.
// Renomeia stdin para "input" e stdout para "output" para usar na configuração do readline.
import { stdin as input, stdout as output } from "node:process";

// Cria uma "interface" do readline conectada ao teclado (stdin) e à tela (stdout).
// Isso permite fazer perguntas e receber respostas no terminal.
const rl = readline.createInterface({ input, output });

// Declara uma função chamada "perguntar" que recebe um texto (a pergunta) e retorna uma Promise<string>.
// Ou seja: ela devolve uma promessa que será resolvida com a resposta do usuário (como string).
function perguntar(texto: string): Promise<string> {
  // Retorna uma nova Promise, para permitir o uso de await lá no main.
  return new Promise((resolve) => {
    // rl.question mostra o texto no terminal e espera o usuário digitar e pressionar Enter.
    // Quando o usuário responde, o callback é chamado com a resposta.
    rl.question(texto, (resposta: string) => resolve(resposta));
    // resolve(resposta) "finaliza" a Promise, entregando a resposta para quem chamou perguntar().
  });
}

// Função para converter uma string em número com validação.
function parseNumero(valor: string): number {
  // Converte a string para number. Ex.: "10" vira 10, "10.5" vira 10.5, "abc" vira NaN.
  const n = Number(valor);

  // Verifica se o valor convertido resultou em NaN (Not a Number), indicando que não era numérico.
  if (Number.isNaN(n)) {
    // Lança um erro, interrompendo o fluxo normal do programa, para ser tratado no try/catch.
    throw new Error(`Valor inválido: "${valor}" não é número.`);
  }

  // Se for um número válido, retorna o número convertido.
  return n;
}

// Função principal assíncrona (porque vamos usar await para esperar respostas do usuário).
async function main() {
  // Inicia um bloco try/catch/finally para tratar erros e garantir que o readline seja fechado.
  try {
    // Faz a primeira pergunta e espera (await) o usuário digitar o nome.
    const nome = await perguntar("Digite seu nome: ");

    // Faz a segunda pergunta e espera (await) o usuário digitar a idade.
    // A idade chega como string, por isso guardamos em idadeStr.
    const idadeStr = await perguntar("Digite sua idade: ");

    // Converte a string idadeStr para number, com validação (pode lançar erro se for inválido).
    const idade = parseNumero(idadeStr);

    // Imprime uma mensagem usando template string.
    // Calcula idade + 5 para mostrar a idade em 5 anos.
    console.log(`Olá, ${nome}! Em 5 anos você terá ${idade + 5} anos.`);
  } catch (e) {
    // Se qualquer erro acontecer no try (ex.: parseNumero lançar erro), ele cai aqui.
    // Faz um type assertion (e as Error) para acessar a propriedade message com segurança.
    console.error("Erro:", (e as Error).message);
  } finally {
    // Este bloco roda sempre, com erro ou sem erro.
    // Fecha a interface do readline para liberar o terminal e encerrar o processo corretamente.
    rl.close();
  }
}

// Chama a função principal para iniciar o programa.
main();