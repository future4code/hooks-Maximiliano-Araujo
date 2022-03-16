console.log("Boas vindas ao jogo Black-Jack.")

if (confirm("Deseja comprar cartas?")) {
    function comprarCartas () {

        const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        const naipes = ["♦️", "♥️", "♣️", "♠️"]

        const numero = cartas[Math.floor(Math.random() * 13)]

        const naipe = naipes[Math.floor(Math.random() * 4)]

        let valor 

        if (numero === "A") {
            valor = 11
        } else if (numero === "J"  || numero === "K"  ||  numero === "Q") {
            valor = 10
        } else {
            valor = Number (numero)
        }
    
        const cartaJogador1 = {
            text: numero + naipe,
            valor: valor
        }
        return cartaJogador1

        const cartaJogador2 = {
            text: numero + naipe,
            valor: valor
        }
        return cartaJogador2

        const cartaComputador1 = {
            text: numero + naipe,
            valor: valor
        }
        return cartaComputador1

        const cartaComputador2 = {
            text: numero + naipe,
            valor: valor
        }
        return cartaComputador2
    }

    const cartaJogador1 = comprarCartas()
    const cartaJogador2 = comprarCartas()
    const cartaComputador1 = comprarCartas()
    const cartaComputador2 = comprarCartas()

    let pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor 
    let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

    console.log("Suas cartas são:", cartaJogador1.text, cartaComputador2.text, "e sua pontuação é:", pontuacaoJogador)
    console.log("Cartas computador:", cartaComputador1.text, cartaComputador2.text, "e a pontuação é:", pontuacaoComputador)

    if (pontuacaoComputador < pontuacaoJogador) {
        console.log("O Usuário ganhou!")
    } else if (pontuacaoComputador > pontuacaoJogador) {
        console.log("O computador ganhou")
    } else if (pontuacaoComputador === pontuacaoJogador)
    console.log("Empate")
} else {
    console.log("O jogo acabou.")
}







