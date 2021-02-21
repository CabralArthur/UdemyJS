//Aula ainda sobre o Destructuring, porém utilizando objetos em parâmetros de função

//Function rand retornará um número aleatório
function rand({min = 0, max = 1000} = {}){ //Utilizando destructuring para acessar o mínimo e o máximo
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//Definindo const obj e dentro do objeto, definindo mínimo e máximo

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 400 }));
