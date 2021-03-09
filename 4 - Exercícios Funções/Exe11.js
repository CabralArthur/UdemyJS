/*

As regras para o cálculo dos anos bissextos são as seguintes:

-De 4 em 4 anos é ano bissexto;
-De 100 em 100 anos não é ano bissexto;
-De 400 em 400 anos é ano bissexto;

Prevalecem as últimas regras sobre as primeiras.

Partindo daí elabore uma função que recebe um ano 
e calcula se ele é ano bissexto, 
imprimindo no console a
mensagem e retornando true ou false.

*/

function eBissexto(ano){
    //Variável referente ao ano bissexto, inicialmente falso
    bissexto = false;

    //Se o valor do ano for divisível por 400, ou se o valor do ano não for divisível por 100 e divisível por 4
    if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0)){

        //O ano em questão é bissexto
        console.log('O ano é bissexto');
        //E o valor do bissexto passa a ser true
        bissexto = true;

    }else{

        //Caso não, o ano em questão não é bissexto   
        console.log('O ano não é bissexto');
        //E o valor do bissexto passa a ser false
        bissexto = false;

    };
};

//Utilizando a função com o ano 2016 (Bissexto)
eBissexto(2016);

//Utilizando a função com o ano 2017 (Não bissexto)
eBissexto(2017);