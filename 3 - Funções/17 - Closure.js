//Closure é o excomo criado quando uma função é declarada

//Esse escopo irá permitir que você acesse e manipule
//as variáveis as variáveis externas à função

//Contexto Léxico em ação

const g = 'Global';

function fora() {
    //Mesmo com uma variável previamente declarada acima
    const g = 'Local';
    //A função e suas variáveis entendem suas 'origens'
    function dentro() {
        return g;
    };
    return dentro;
};

const minhaFuncao = fora(); //Retornará a local
console.log(minhaFuncao()) 