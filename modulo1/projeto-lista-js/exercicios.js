// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number (prompt("Qual a altura do retângulo?"))
  let largura = Number (prompt("Qual a largura do retângulo?"))
  let area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number (prompt("Qual o ano atual?"))
  let anoNascimento = Number (prompt("Qual o ano que você nasceu?"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  
}
calculaIMC(85,1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade")
  const email = prompt("Qual o seu email")
  const informacoes = (nome, idade, email)
  return informacoes
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual a sua primeira cor favorita?")
  let cor2 = prompt("Qual a sua segunda cor favorita?")
  let cor3 = prompt("Qual a sua terceira cor favorita?")
  let cores = cores.push(cor1, cor2, cor3) 
  return cores 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 return string.toUpperCase()

}
retornaStringEmMaiuscula("ola, mundo")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 return custo / valorIngresso

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimo = array[array.length -1 ]
  return ultimo 

}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
   const primeiro = array [0]
   const ultimo = array[ array.length -1]
   array[0] = ultimo
   array[ array.length -1] = primeiro
   return array

}
console.log(trocaPrimeiroEUltimo())

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const palavra1 = string1.toText()
  const palavra2 = string2.toText()
  return palavra1 === palavra2   

}
checaIgualdadeDesconsiderandoCase("banana", "pessoa")


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}