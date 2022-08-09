const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

var colors = require('colors/safe');

if (!num1 || !num2) {
    console.log("esperava dois parâmetros.")
} else {
    switch (operacao) {
        case "soma":
            console.log(colors.red(num1 + num2))
            break;
        case "subt":
            console.log(colors.yellow(num1 - num2))
        case "mult":
            console.log(colors.green(num1 * num2))
            break;
        case "div":
            console.log(colors.magenta(num1 / num2))
            break
    }    
}

