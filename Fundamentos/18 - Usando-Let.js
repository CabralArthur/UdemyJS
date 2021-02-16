//Variáveis definidas com a palavra let tem escopo global, de função e de bloco

//Declarando variável número de valor 1
let numero = 1;

{
    //Declarando variável número de valor 2
    let numero = 2;
    //Será printado o valor interno ao bloco
    console.log('Dentro = ',numero);
};

//Será printado o valor global presente
console.log('Fora = ',numero);
