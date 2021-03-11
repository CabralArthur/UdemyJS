//Aula inicial sobre Herança
//O objetivo da herança é criar mecanismos 
//para que o reuso de código não seja feito utilizando copiar e colar

//A Herança em JavaScript é baseada em protótipos

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//Um objeto não possui o atributo prototype
console.log(ferrari.prototype)

//Quando utiliza-se esse atributo, é possível acessar o objeto pai
console.log(ferrari.__proto__) //Um objeto vazio

//Um objeto criado aponta para Object.prototype
console.log(ferrari.__proto__ === Object.prototype)

//A mesma coisa para o volvo
console.log(volvo.__proto__ === Object.prototype)

//O Object.prototype não possui um objeto pai, e possui valor nulo
console.log(Object.prototype.__proto__ === null)

function meuObjeto() { }

//Object e o meuObjeto são funções
console.log(typeof Object, typeof meuObjeto)

//Object.prototype é um objeto vazio, bem como meuObjeto, que foi criado com a função
console.log(Object.prototype, meuObjeto.prototype)