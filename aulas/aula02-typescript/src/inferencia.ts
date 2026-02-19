let curso = "TADS"; // inferido como string
// curso = 10; // erro

let ano: number; // anotação explícita
ano = 2025;

function dobro(x: number) {
  return x * 2; // retorno inferido como number
}

console.log(dobro(10));
