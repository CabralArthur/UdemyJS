//Declarando const nums, que é uma array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Exemplo 1')

//Criando E.R. For
for (x in nums) {
    //Adicionando condicional
    if (x == 5) {
        //Que irá parar o for
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('Exemplo 2')

//Criando E.R. For
for (y in nums) {
    //Adicionando condicional
    if (y == 5) {
        //Que irá interromper o laço atual e continuar o próximo laço
        continue //Só faz sentido agir em cima de estruturas de repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Exemplo 3')

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        };
        console.log(`${a},${b}`)
    };
};

console.log('Fim')