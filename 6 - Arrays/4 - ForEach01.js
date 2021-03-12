//Aula sobre forEach - Forma de percorrer um array

const aprovados = ['Arthur', 'Luna', 'Lara']

//Utilizando for each com uma função que possui parâmetros de nome e índice
console.log('Função com parâmetro de índice')
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array[indice])
})

console.log(' ')
console.log('Função sem parâmetro de índice')
aprovados.forEach(nome => console.log(nome))

console.log(' ')
console.log('Função Armazenada com variável')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)