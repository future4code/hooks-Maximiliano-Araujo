// AULA STRINGS E ARRAYS
/*

N°1
let array
console.log('a. ', array) // undefiened

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 0

array[i+1] = 19
console.log('e. ', array) // (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

N°2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27



                         EXERCÍCIOS DE ESCRITA
                         
N°1
let nome = prompt ("Qual o seu nome?")
let email = prompt ("Qual o seu e-mail")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo, ${nome}`)


N°2
let comidas = ["pizza", "hambúrguer", "arroz", "feijão", "miojo"]
let listaComidas = comidas[0] 
let listaComidas1 = comidas[1]
let listaComidas2 = comidas[2]
let listaComidas3 = comidas[3]
let listaComidas4 = comidas[4]

console.log(listaComidas)
console.log(listaComidas1)
console.log(listaComidas2)
console.log(listaComidas3)
console.log(listaComidas4)

const usuarioComida = prompt ("Qual a sua comida preferida?")
let i = 1
comidas[1] = usuarioComida
console.log(comidas)

N°3
const listaDeTarefas = []
let tarefa1 = prompt ("Me diga uma tarefas que você precisa fazer no dia:")
let tarefa2 = prompt ("Me diga uma segunda tarefa que você precisa fazer no dia")
let tarefa3 = prompt ("Me diga uma terceira tarefa que você precisa fazer no dia:")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

const tarefaRealizada = prompt ("Informe o número da tarefa que você já realizou(0,1,2):")
listaDeTarefas.splice (tarefaRealizada, 1)
console.log(listaDeTarefas)
*/