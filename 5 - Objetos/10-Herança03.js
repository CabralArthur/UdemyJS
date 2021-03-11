//Aula sobre Object.create e percorrendo atributos de um objeto

const pai = {nome: 'Pedro', corCabelo: 'Preto'}

//Criou um objeto novo, tento como protótipo o objeto pai
const filha1 = Object.create(pai) 

//Trocando o valor do atributo nome
filha1.nome = 'Ana'

//Imprimindo valor do atributo cor do cabelo
console.log(filha1.corCabelo)

//Imprimindo valor do atribudo nome
console.log(filha1.nome)

//Após a ligação do objeto com o protótipo, são colocados os
//atributos dentro do objeto

const filha2 = Object.create(pai, {

    //Não pode ser mudado e é enumerado
    nome: {value: 'Bia', writable: false, enumerable: true} 
})

//Imprimindo valor do objeto nome
console.log(filha2.nome)

//Alterando valor do nome (não funcionará)
filha2.nome = 'Carla'

//Alterando valor da cor do cabelo
filha2.corCabelo = 'Rosa'

//Imprimindo valor do nome (que é o mesmo) e o da cor do cabelo, que foi modificado
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//Imprimindo as chaves do object filha1 
console.log('Chaves Filha 1 :')
console.log(Object.keys(filha1))

//Imprimindo as chaves do object filha2
console.log('Chaves Filha 2 :')
console.log(Object.keys(filha2))

//Percorrendo objeto
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log('Por Herança') //Imprimindo se é do próprio objeto ou se é por herança
}