/*

Faça um algoritmo que calcule o fatorial de um número

*/

calculaFatorial = function(numero){
  //Criando variável que irá armazenar o valor do resultado
  let resultado = 1;
  //Criando estrutura de repetição whilte, que irá verificar o valor do número multiplicador 
  while ( numero != 0) {
    //Com isso, o resultado, inicialmente 1, será multiplicado ao número (número!)
    resultado *= numero;
    //Após a multiplicação feita, será feito o descréscimo no número ( (numero -1)!)
    numero --;
  };

  //No final do código, retorna-se o resultado
  return resultado;
};

console.log(calculaFatorial(5));