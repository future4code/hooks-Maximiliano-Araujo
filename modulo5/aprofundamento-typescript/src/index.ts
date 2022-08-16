type person = {
    nome: string,
    idade: number,
    corFavorita: string
}
enum CoresArcoIris{
    VERMELHO = "Vermelho",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja"
}

const usuarioA: person = {
    nome: "Adriane",
    idade: 25,
    corFavorita: CoresArcoIris.AZUL
}

console.log(usuarioA)