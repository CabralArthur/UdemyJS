//Objeto é uma coleção dinâmica de pares chave/valor

//Criando um novo objeto
const produto = new Object

//2 Formas de inserir elemento no objeto
produto.nome = "Cadeira"

produto['marca do produto'] = 'Genérica'

produto.preco = 220

//Imprimindo objeto
console.log(produto)

//Deletando elemento
delete produto.preco

console.log(produto)


//Um objeto pode possuir outros objetos internamente, bem como
//pode ter funções presentes dentro dele

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 21
    }],
    calcularValorSeguro: function () {
        //
    }
}

//Alterando valor do número da forma 1
carro.proprietario.endereco.numero = 1000
//Alterando valor do logradouro da forma 2
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

//Imprimindo
console.log(carro)

//Deletando condutores do objeto carro
delete carro.condutores

//Imprimindo
console.log(carro)

//Deletando proprietário do objeto carro
delete carro.proprietario

//Imprimindo
console.log(carro)

//Caso você tente imprimir ou acessar uma prorpieda indefinida em um objeto em JS
//você receberá uma mensagem de erro, o mesmo não ocorrerá se 
//você tentar acessar um objeto excluído