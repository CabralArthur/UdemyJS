//Criando array que conterá funções
const funcs = [];

//Utilizando o for para inserir as funções na array
for(let i = 0; 1 < 10; i++){
    //A função (anônima) irá imprimir o valor de i e será inserida na array
    funcs.push(function(){
        console.log(i)
    });
};

//Agora, pelo fato de que as variáveis 
//declaradas com let tere, escopo de bloco,
//os números imprimidos serão 2 e 8.
funcs[2]();
funcs[8]();