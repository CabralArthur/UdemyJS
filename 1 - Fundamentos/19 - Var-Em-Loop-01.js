//Utilizando Estrutura de Repetição for para printar valor de índice [i]
for(var i = 0; i < 10; i++){
    //A variável i, inicialmente 0, será somada e printada 10 vezes
    console.log(i)
};

//Nesse caso o valor para i conseguiu ser printado,
//devido ao fato de que variáveis que possuem var para declará-las
//não possuem escopo de bloco, e com isso a variável i está presente
//dentro e fora do for

console.log("i =", i);