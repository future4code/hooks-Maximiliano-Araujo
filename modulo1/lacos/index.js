


let nomePet = []

const pergunta = Number (prompt("Quantos bichinhos você tem?"))

let quantidadePets = 0


    if (pergunta === 0) {
        console.log("Que que pena! você pode adotar um pet.")
    } else {
        while (quantidadePets < pergunta) {
            quantidadePets++
            nomePet.push(prompt("Digite um nome"))
            
        }
        console.log(nomePet)
    }




