console.log(typeof String) //É uma função
console.log(typeof Array) //É uma função
console.log(typeof Object) //É uma função

//Todos possuem um .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('') //Implementando função reverse dentro da string
}
console.log('Cabral'.reverse())

Array.prototype.first = function(){ //Implementando função que pega o primeiro elemento
    return this[0]
}

console.log([1,2,3].first())
console.log(["1,2,3"].first())

String.prototype.toString = function(){ //Não substitua comportamentos que já existem
    return 'Lascou Tudo'
}

console.log('Cabral'.reverse())
