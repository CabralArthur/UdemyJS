//Nessa aula analisaremos a anatomia de um bloco if

function soBoaNoticia(nota){
    if(nota>=7){ //Dentro dos parênteses tem SEMPRE uma condicional, que retorna verdadeiro ou falso
        console.log('Você foi aprovado')
    }
}

soBoaNoticia(7); //Imprimirá a mensagem
soBoaNoticia(6); //Não imprimirá nada

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade..' + valor);
    };
};

//Não irá imprimir nada, pois implicitamente o valor aqui é undefined, e undefined é falso.
seForVerdadeEuFalo();

//Não irá imprimir nada, pois o valor aqui é null, e null é falso.
seForVerdadeEuFalo(null);

//Não irá imprimir nada, pois o valor aqui é undefined, e undefined é falso.
seForVerdadeEuFalo(undefined);

//Não irá imprimir nada, pois o valor aqui é NaN (Not a Number), e NaN é falso.
seForVerdadeEuFalo(NaN);

//Não irá imprimir nada, pois o valor aqui é 0, e 0 é falso
seForVerdadeEuFalo(0);

//Não irá imprimir nada, pois o valor aqui é uma string vazia, e ela possui valor falso.
seForVerdadeEuFalo('');

//Irá imprimir a mensagem.
seForVerdadeEuFalo(-1);

//Irá imprimir a mensagem.
seForVerdadeEuFalo('?');

//Irá imprimir a mensagem. (Uma array vazia possui valor verdadeiro)
seForVerdadeEuFalo([]);

//Irá imprimir a mensagem. (Uma array preenchida possui valor verdadeiro)
seForVerdadeEuFalo([1, 2]);

//Irá imprimir a mensagem. (Um object vazio possui valor verdadeiro)
seForVerdadeEuFalo({});