//pelo comando process.argv[0]

// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome} você tem ${idade} anos.`)

var colors = require('colors/safe');

const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeFuturo = idade + 7

if (!process.argv[2] || !process.argv[3]) {
    console.log("esperava dois parâmetros.")
} else {
    console.log(colors.yellow(`Olá, ${nome} você tem ${idade} anos. Em sete anos você terá ${idadeFuturo}`))
}


