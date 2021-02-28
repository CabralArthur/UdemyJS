//Nessa aula veremos como utilizamos Parâmetro Padrão antes do ECMA2015 e atualmente.


//Estratégia 1 para gerar valor padrão:

function soma1(a, b, c) {
    a = a || 1 //Nesse caso a recebe o valor de a, ou o valor 1
    b = b || 2 //Nesse caso b recebe o valor de b, ou o valor 2
    c = c || 3 //Nesse caso c recebe o valor de c, ou o valor 3
    return a + b + c;
};

console.log(
    soma1(), //Retornando valor padrão 6
    soma1(2), //Retornando soma doa valores 2 + (2 + 3), os valores entre parênteses são padrão
    soma1(3, 3, 4), //Retornando a soma dos valores presentes normalmente
    soma1(0, 0, 0) //Nesse caso, será retornado o valor padrão 6, tendo em vista que o zero não é considerado valor nesse tipo.
)

//Estratégias 2, 3 e 4 para gerar valor padrão:

function soma2(a, b, c) {

    a = a != undefined ? a : 1 //1 - Se for diferente de undefined, ele recebe o valor de a, e se for igual a undefined, recebe o valor 1

    b = 1 in arguments ? b : 1 //Verificando se exista o segundo argumento passado para a função, se sim, o valor do argumento é ele próprio, se não, o valor é 1

    c = isNaN(c) ? 1 : c //Se não for o número, ele pega o valor padrão (1), se for número, ele pega o valor do parâmetro normalmente

    return a + b + c;
}

//Valor impresso seŕa 12 (10 + 1 + 1)
console.log(soma2(10, 1));

//Valor impresso será 30 (10 + 10 + 10)
console.log(soma2(10, 10, 10));

//Valor impresso será 3 (1 + 1 + 1)
console.log(soma2(0, 0, 0));

//Usado atualmente (Forma preferida):
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

//Valor impresso será 3 (1 + 1 + 1) valores padrões
console.log(soma3());