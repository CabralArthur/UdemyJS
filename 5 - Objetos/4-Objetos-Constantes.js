//Qual o motivo de poder se alterar atributos de um
//objeto que foi criado como constante?


//       End. Mem. (Fixo)

//pessoa --> 123 --> {...} Dado (Variável)
const pessoa = { nome: 'João' }

pessoa.nome = 'Pedro'

console.log(pessoa.nome)

//Tentando trocar E.M. (Não é possível)
//pessoa -> 456 -> {...}

//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //"Congelando" objeto, ou seja, os dados não podem ser modificados

//Tentando alterar
pessoa.nome = 'Maria'
//Tentando ALterar
delete pessoa.nome
//Nada Acontece
console.log(pessoa)