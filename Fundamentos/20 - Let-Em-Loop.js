//Utilizando Estrutura de Repetição for para printar valor de índice [i]
for(let i = 0; i < 10; i++){
    //A variável i, inicialmente 0, será somada e printada 10 vezes
    console.log(i)
};

//Nesse caso o valor para i não será printado.
//Isso ocorre devido ao fato de que variáveis que possuem let para declará-las
//possuem escopo de bloco, e com isso a variável i 
//estará presente apenas dentro do for

console.log("i =", i);