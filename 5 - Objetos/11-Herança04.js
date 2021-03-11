//Aula sobre função e atributo prototype da função

//Criando objeto a partir de uma função
function MeuObjeto(){}
console.log(MeuObjeto.prototype)

//Instanciando um novo objeto a partir da mesma função construtora
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Conferindo que, todos os objetos criados a partir de uma mesma
//função construtora apontam para o mesmo protótipo
console.log(obj1.proto === obj2.proto)

//Confirmando que quando é criado um objeto a partir de uma mesma função construtora utilizando new
//o protótipo desse objeto automaticamente aponta par a função que foi criada .prototype
console.log(MeuObjeto.prototype === obj1.proto)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

console.log(obj1.nome)

obj2.nome = 'Rafael'
obj2.falar()


const obj3 = {}
obj3.proto = MeuObjeto.prototype
obj3.nome = 'Objeto 3'
obj3.falar()

//Resumindo tudo
console.log((new MeuObjeto).proto === MeuObjeto.prototype)
console.log(MeuObjeto.proto === Function.prototype)
console.log(Function.prototype.proto === Object.prototype)
console.log(Object.prototype.proto === null)