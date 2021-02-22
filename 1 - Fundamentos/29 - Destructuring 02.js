//Aula ainda sobre o Destructuring, porém utilizando Array

//Significa que você criou uma variável a que recebe o valor do primeiro elemento da array
let [a] = [10]; 

//Nesse caso, pulamos algumas variáveis
let [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8]; 

//O 'n6' também seria undefined, mas como foi pre-definido o valor de 0, não ocorreu.
console.log(n1,n3,n5,n6); 

//Foi criada constante cujo primeiro elemento foi ignorado,
//No segundo elemento, foi ignorado o primeiro elemento da array [, nota] 
//e considerado apenas o segundo el.
const [, [, nota]] = [[, 8,8], [9, 6, 8]];

//Ele imprimirá o valor 6
console.log(nota)

//Por fim, entende-se que:
//O Destructuring para objetos se utilizam as chaves.
//Já no contexto de array, utiliza-se os colchetes.