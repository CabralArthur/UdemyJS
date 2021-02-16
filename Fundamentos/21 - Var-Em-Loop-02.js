//Criando array que conterá funções
const funcs = [];

//Utilizando o for para inserir as funções na array
for(var i = 0; 1 < 10; i++){
    //A função (anônima) irá imprimir o valor de i e será inserida na array
    funcs.push(function(){
        console.log(i)
    });
};

//Porém pelo fato de que as variáveis 
//declaradas com var não tem escopo de bloco,
//os números imprimidos serão 10 e 10. (O último número do valor i).
funcs[2]();
funcs[8]();