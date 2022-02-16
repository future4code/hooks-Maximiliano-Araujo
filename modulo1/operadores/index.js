

/*                  EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

Nº 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log (resultado)

resultado = bool1 && bool2 && bool3
console.log (resultado)

resultado = !resultado && (bool1 || bool2)
console.log (resultado)

console.log (typeof resultado)




Nº 2
let primeiroNumero = Number (prompt ("Digite um número"))
let segundoNumero = Number (prompt ("Digite outro número:"))

const soma = (primeiroNumero + segundoNumero)

console.log(soma)

Sugiro que insira o comando "Number" para converter a string para numeral.

*/


/*                  EXERCÍCIOS DE ESCRITA DE CÓDIGO

Nº 1
let idade = Number (prompt ("Qual a sua idade?"))
let idadeAmigo = Number (prompt ("Qual a idade do/a seu/ua melhor amigo/a?"))
let somaIdade = (idade > idadeAmigo)
let mostra = prompt ("Sua idade é maior do que a do seu melhor amigo?", somaIdade)
let diferencaIdade = idade - idadeAmigo
console.log(diferencaIdade) 



Nº2 
let numPar = Number (prompt("Por favor, insira um número par:"))
let restDiv = (numPar % 2)
console.log(restDiv)

A divisão de todo número par é 2 e se tentarmos dividir qualquer número que seja ímpar, vai sobrar algo.



Nº3
let idade = Number (prompt("Quantos anos você tem?"))
console.log("Você tem", idade * 12, "meses de idade,", (idade *12 * 365), "dias de idade", "e", (idade * 12 * 365 * 24), "horas de idade.")



Nº4
let num1 = Number (prompt("Digite um número:"))
let num2 = Number (prompt ("Digite outro número:"))
console.log("primeiro número >", num1, "segundo número >", num2)
console.log ("O primeiro número é maior que o segundo?", num1 > num2)
console.log ("O primeiro número é igual ao segundo?", num1 === num2)
let div1 = (num1 / num2)
let rest1 = (div1 % 2)
console.log ("O primeiro número é divisível pelo segundo?", (rest1 === 0))
let div2 = (num2 / num1)
let rest2 = (div2 % 2)
console.log("O segundo número é divisível pelo primeiro?", (rest2 === 0) )

*/


    /*     DESAFIO

    N°1
let fareinheitKelvin = ((77 - 32) * (5/9) + 273.15)
console.log("77° Fareinheit em kelvin =", fareinheitKelvin)

let celsiusFareinheit = ((80 * 9/5) + 32)
console.log("80° Celsius em Fareinheit =", celsiusFareinheit)

let celsiusFareinheit80 = ((30 * 9/5) + 32)
console.log("30° Celsius para Fareinhet =", celsiusFareinheit80)

let celsiusKelvin = (30 + 273)
console.log("30° Celsius para Kelvin =",celsiusKelvin)

let pergunta = Number (prompt("Quantos graus Celsius você quer converter para fareinheit e kelvin?"))

let resposta1 = ((pergunta * 9/5) + 32)
console.log(pergunta, "Celsius para Fareinhet =", resposta1)

let resposta2 = (pergunta + 273)
console.log(pergunta, "Celsius para Kelvin =",resposta2)


N°2
let quilowatt = Number (((208 * 60) / 0.05)/15)
console.log(quilowatt)

//Eu poderia usar uma função para arredendar o valor, mas ainda não é 
// permitido o uso de outras funções. Daqui a pouquinho. :)

N°3
let libraParaQuilograma = (20 / 2.205)
let onçaParaQuilograma = (10.5 / 33.594)
let milhaParaMetro = (100 * 1609)
let pesParaMetro = (50 / 3.281)
let galaoParaLitro = (103.56 * 3.806)
let xicaraParaLitro = (450 / 3.5)

console.log("20 libras convertidos para kilo é:", libraParaQuilograma)
console.log("10.5 once convertidos para kilo é", onçaParaQuilograma)
console.log("100 milhas divididas para metro é:", milhaParaMetro)
console.log("10 pes convertidos para metro é:", pesParaMetro)
console.log("103.56 galões convertidos para litro é:", galaoParaLitro)
console.log("450 xícaras convertidas para litro é:", xicaraParaLitro)


let pergunta = Number (prompt("Quantas libras você quer converter para kilo?"))
let resposta = (pergunta / 2.205)
console.log(pergunta, "libras convertidas em kilo é:", resposta)

*/




























