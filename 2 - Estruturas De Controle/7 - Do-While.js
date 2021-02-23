//Aula sobre estrutura do while, utilizando o mesmo exemplo

//Criando função que retornará um valor aleatório no intervalo entre min e max.
function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0;
let c = 0;
//Enquanto o valor da opção for diferente de -1

do { 
    //[Adicionando um contador, exemplo adicional feito por mim]

    //O número continuará sendo sorteado.
    opcao = getInteiroAleatorioEntre(-1, 10);

    //E o incremento vai sendo feito. (Incremento = Operador Unário já visto)
    c++; 

    //E o número sorteado atual será impresso.
    console.log('Opção Sorteada foi: ' + opcao)
} while(opcao != -1);

console.log('Sorteios Necessários para se chegar ao número final: ' + c)

//Ao fim da Estrutura de Repetição, ele imprimirá essa mensagem.
console.log('Fim do Código'); 