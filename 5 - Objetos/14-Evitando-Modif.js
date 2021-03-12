//Aula sobre restrição e controle do código em JS

//Object.preventExtensions

//Não é possível ADICIONAR mais nenhum atributo nesse objeto
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'Promoção'
})

produto.nome = 'Borracha' //[Permitido]
produto.descricao = 'Borracha escolar branca' // [Não Permitido]
delete produto.tag //[Permitido]
console.log(produto)

//Object.seal

//Selando o objeto, não é possível deletar ou adicionar elementos,
//mas é possível alterar os elementos que estão presentes

const pessoa = {nome: 'Juliana', idade:35}

Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

delete pessoa.nome
pessoa.endereco = 'Rua 1'
console.log(pessoa)


pessoa.nome = 'Junior'
console.log(pessoa)

//Object.freeze = Selado + valores constantes

