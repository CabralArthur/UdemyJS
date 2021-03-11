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

console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)