//O Array em JS é um objeto (especial com característicar próprias)

//Array é uma estrutura dinâmica, cresce e diminui dinâmicamente

                        //Utilizando o new com Array, temos um objeto
console.log(typeof Array, typeof new Array, typeof []) 
                                            //Um Array literal também é um objeto

//Boas práticas: trabalhe com objetos homogêneos dentro de um array

//Criando uma array utilizando new
let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

//Utilizando Notação Literal
aprovados = [1,2,3]

console.log(aprovados[0]) //Acessando elemento a partir do zero
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //Nesse caso ele retornará undefined

//Adicionando elementos no array
aprovados[3] = 'Paulo'

aprovados.push('Abia')

console.log(aprovados)

//Impriminto tamanho do array
console.log(aprovados.length)

//Adicionando elementos no array
aprovados[9] = 'Rafael'

console.log(aprovados)

console.log(aprovados[8] === undefined)

//Sorteando elementos do array
aprovados.sort()
console.log(aprovados)

//1- Excluindo elementos utilizando delete (Colocará undefined na posição 1)
delete aprovados[1]
console.log(aprovados[2])

//2- Removendo elementos utilizando splice
aprovados.splice(1,2, 'Elemento1', 'Elemento2') //Após excluir os elementos 1 e 2 ele irá inserir os demais elementos
console.log(aprovados)


