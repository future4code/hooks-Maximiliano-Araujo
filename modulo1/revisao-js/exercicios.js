// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length

}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    array.sort(function (a, b) {
        return a - b;
    });

    return array

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arraPar = []
    for (let i of array) {
        if ((i % 2) === 0) {
          arraPar.push(i)
        }
    }
    return arraPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let arrayPar = []
    for (let i of array) {
        if ((i % 2) === 0) {
          arrayPar.push(i)
        }
    }
    return arrayPar ** 2

}



retornaNumerosParesElevadosADois

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNumero = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonimo = {...pessoa, nome: "ANÔNIMO"}
    return anonimo

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}