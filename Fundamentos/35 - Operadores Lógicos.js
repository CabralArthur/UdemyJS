//A ideia é o seguinte, você tem 2 serviços
//Um na terça (Trabalho 1) e um na quinta (Trabalho 2).

//Se o trabalho 1 der certo e o trabalho dois der certo, você comprará uma TV de 50 e tomará sorvete.

//Se apenas um dos trabalhos der certo, você comprará uma TV de 32 polegadas e tomará sorvete.

//Se não der certo nenhum dos dois, você não comprará nada e não tomará sorvete.

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;//Exemplo do Ou
    const comprarTV50 = trabalho1 && trabalho2; //Exemplo do e
    const comprarTV32 = trabalho1 != trabalho2; //O Operador de ou exclusivo pode ser simulado com a diferença.
    const manterSaudavel = !comprarSorvete; //Operador unário

    //O conceito de objeto aqui, permanece o mesmo com o par chave valor
    return{comprarSorvete, comprarTV50, comprarTV32, manterSaudavel};
}

//Fazendo teste com os 2 valores verdadeiros.
console.log(compras(true,true));

//Fazendo teste com um dos valores falsos.
console.log(compras(true,false));

//Fazendo teste com os dois valores falsos.
console.log(compras(false,false));