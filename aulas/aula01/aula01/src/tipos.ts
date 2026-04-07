let ativo: boolean = false;
let idade: number = 20;
let nome: string = "Ana";

let notas: number[] = [8, 9.5, 7];
let tags: Array<string> = ["poo", "typescript", "ifpr"];

// tupla
let coordenada: [number, number] = [25.40, -54.00];

// enum (opcional, mas bom para mostrar)
enum Perfil {
  ADMIN = "ADMIN",
  USER = "USER"
}
let perfil: Perfil = Perfil.USER;

console.log({ ativo, idade, nome, notas, tags, coordenada, perfil });