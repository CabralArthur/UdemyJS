//Formas de declarar função

console.log(soma(3, 4))

//1- Function declaration (Nesse caso, pode-se utilizar a função)
//Antes mesmo de ter essa função declarada.

function soma(x, y) {
    return x + y;
};

//2- Function Expression

const sub = function (x, y) {
    return x - y;
};

//3 - Named Function Expression (Menos usada)

const mult = function mult(x, y) {
    return x * y;
}