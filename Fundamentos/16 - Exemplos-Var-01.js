//Exemplo 1 - Diversos Blocos

{
    {
        {//Utilizando var para declarar variável, mesmo dentro de um bloco de código
         //que não seja uma função, ela ficariá visível para todos que estiverem fora desse bloco.
            var sera = "Será???"
        }
    }
}

console.log(sera);

//Exemplo 1 - Dentro do escopo (visão) de uma function

function teste(){
    var local = 123;
    console.log(local);
};

teste(); //Será acionada a função

console.log(local); //Não será printado nada