let dobro = function (a) {
    return 2 * a;
}

//A função arrow é sempre uma função anônima

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a; //Nesse caso o retorno é implícito (return 2 * a)

console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá'//Nesse caso, retorna-se a string 'Olá'

console.log(ola())