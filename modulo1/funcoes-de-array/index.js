// -----------------------EXERCÍCIO DE INTERPRETAÇÃO 01----------------------------------------

// const usuarios = [
//     {nome: "Amanda Rangel", apelido: "Mandi"},
//     {nome: "Laís Petra", apelido: "Laura"},
//     {nome: "Letícia Chijo", apelido: "Chijo"}
// ]

// const novaArray = usuarios.map((item, index, array) => {
//     console.log(iten, index, array)
// })

// O console mostrou primeiramente os itens do array (uma cópia do que tá escrito).
// Em segundo lugar mostrou a posição de cada item do array (0,1,2).
// Por último mostrou o array completo incluindo os itens e índices.

//// -----------------------EXERCÍCIO DE INTERPRETAÇÃO 02----------------------------------------

// const usuarios = [
//     {nome: "Amanda Rangel", apelido: "Mandi"},
//     {nome: "Laís Petra", apelido: "Laura"},
//     {nome: "Letícia Chijo", apelido: "Chijo"}
// ]

// const novoArray = usuarios.map((item, index, array) => {
//     return item.nome
// })

// console.log(novoArray)

// O console.log retornou só o array com os nomes.



//// -----------------------EXERCÍCIO DE ESCRITA 01----------------------------------------

// const pets = [
//     {nome: "Lupin", raca: "Salsicha"},
//     {nome: "Poly", raca: "Lhasa apso"},
//     {nome: "Madame", raca: "Poodle"},
//     {nome: "Quentinho", raca: "Salsicha"},
//     {nome: "Fluffy", raca: "Poodle"},
//     {nome: "Caramelo", raca: "Vira-lata"}
// ]


// let petsName = pets.map ((item) => {
//     return item.nome
// })

// console.log(petsName)

// let cachorroSalsicha = pets.filter ((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(cachorroSalsicha)


// let cachorroPoodle = pets.filter ((item) => {
//      return item.raca === "Poodle"
    
// })

// let cachorroDesconto = cachorroPoodle.map ((item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
// })

// console.log(cachorroDesconto)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorroDesconto[0]}!`)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorroDesconto[1]}!`)


//// -----------------------EXERCÍCIO DE ESCRITA 02----------------------------------------



