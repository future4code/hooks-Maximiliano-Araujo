/*
function informacoes (nome, idade, cidade, profissao){
    console.log("meu nome é", nome , "tenho", idade , "anos, sou da didade do", cidade, "e sou", profissao)
}
console.log(informacoes("max", "29", "rio", "estudante"))
*/

function somaNumeros (num1,num2){
    const soma = num1 + num2 
    console.log(soma)
}
somaNumeros(2,3)

function maiorIgual (numero1, numero2){
    const maiorIgual = numero1 >= numero2
    console.log(maiorIgual)
}
maiorIgual(7,6)

function parOuNao (numPar){
    const numeroPar = numPar % 2 === 0
    console.log(numeroPar) 
}
parOuNao(9)

function aritmetica (op1, op2){
    const inseridos = (op1 , op2)
    const soma = op1 + op2
    const diferenca = op1 % op2
    const multiplicacao = op1 * op2
    const divisao = op1 / op2 
    console.log(inseridos)
    console.log(soma)
    console.log(diferenca)
    console.log(multiplicacao)
    console.log(divisao)
}

aritmetica(56,85)

