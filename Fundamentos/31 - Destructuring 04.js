//Última sobre o Destructuring, porém utilizando array em parâmetros de função

//Criando função rand, que retornará um número aleatório
function rand([min =  0, max = 1000]){
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
};

console.log(rand([0,2]));
console.log(rand([992]));
console.log(rand([, 992]));
//Valores padrões
console.log(rand([]));