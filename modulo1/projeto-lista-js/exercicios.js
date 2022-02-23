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
=======
  // implemente sua lógica aqui


}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number (prompt("Qual o ano atual?"))
  let anoNascimento = Number (prompt("Qual o ano que você nasceu?"))

  let idade = anoAtual - anoNascimento
  console.log(idade)
=======
  console.log(anoAtual - anoNascimento)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso / (altura * altura)
  
}
calculaIMC(85,1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Qual o seu nome?")
  idade = prompt("Qual a sua idade?")
  email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} e meu email é${email}`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("digite uma cor:")
  cor2 = prompt("Digite uma segunda cor:")
  cor3 = prompt("Digite uma terceira cor:")
  console.log([cor1, cor2, cor3])
=======
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

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
   const primeiro = array[0]
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

=======
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}


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