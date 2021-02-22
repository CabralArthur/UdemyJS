//Switch - Seleções Múltiplas

//Faremos com o mesmo problema das aulas passadas

//Switch não é uma expressão relacional

//Se você não colocar o break, ele irá executar todos os valores abaixo

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ //O Switch é feito para múltiplas seleções
        case 10:
            //console.log('Quadro de Honra')
        case 9: //Nesse caso, aqui 'diz-se' que caso o valor seja 10 ou 9, faz-se o print.
            console.log('Quadro de Honra');
            break //Deve-se colocar o break em cada um dos cases.
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break
        default:
            console.log('Nota Inválida');
    };
    console.log('Fim!')
};

imprimirResultado(10);
imprimirResultado(8.6);
imprimirResultado('Ui');
imprimirResultado(2.5);