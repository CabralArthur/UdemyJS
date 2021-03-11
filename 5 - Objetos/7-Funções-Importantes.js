const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Utilizando a função keys para pegar todas as chaves do objeto pessoa
console.log(Object.keys(pessoa))

//Utilizando a função values para pegar todos os valores do objeto pessoa
console.log(Object.values(pessoa))

//Utilizando a função entries para receber um array que possui arrays com chave e valor em cada índice
console.log(Object.entries(pessoa))

//01 - Acessando cada chave / valor separadamente utilizando forEach com 'e'
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//02 - Acessando cada chave / valor separadamente utilizando forEach destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//O defineProperty é utilizado para definir característica de propriedades
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Vai ser posśivel listar
    writable: false, //Não permite ser alterada
    value: "11/03/2021" //Valor da dataNscrimento
})

pessoa.dataNascimento = "01/01/01"; //Não será possível mudar

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //Será possível listar

//Object.assign (ECMAScript 2015)
const dest = { a: 1 } //Objeto de destino

const o1 = { b: 2 }

const o2 = { c: 3, a: 4 }

//O assign pega os atributos dos objetos e insere no objeto de destino, nesse caso, o dest
const obj = Object.assign(dest, o1, o2)

//Congelando todo o objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj)