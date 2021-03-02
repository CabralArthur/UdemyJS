//Existem muitas formas de se chamar uma função...
//Você pode chamar uma função diretamente no escopo global
//Pode chamar uma função através de um objeto

//E temos 2 formas de se chamar uma função: Call e Apply
//A diferença entre os dois é o modo como você passa os parâmetros

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 //Acessando preço do global 
global.desc = 0.1 //Acessando desconto do global
console.log(getPreco())

//Imprimindo função a partir do objeto
console.log(produto.getPreco())

//Utilizando Call e Apply

const carro = { preco: 10000, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Mostrando a diferença entre os dois

//O primeiro parâmetro sempre é o contexto e após eles, os parâmetros
console.log(getPreco.call(carro, 0.17, '$'))

//Já no apply, o primeiro parâmetro é o contexto, e os demais 
//parâmetros são colocados dentro de um array.
console.log(getPreco.apply(carro, [0.17, '$']))