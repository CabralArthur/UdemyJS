//Mostrando que os Parâmetros e retornos são opcionais

function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log('Valor acima do permitido')
    } else {
        return area;
    }
}

//Retornando área normalmente
console.log(area(2, 2));

//Retornando NaN, pelo fato de que ele irá multiplicar 2 * Nada
console.log(area(2));

//Função sem parâmetros retornará NaN
console.log(area());

//Nesse caso ele irá pegar os 2 primeiros parâmetros e desconsiderar os demais
console.log(area(2, 3, 10));

//Por fim, irá perceber que o valor é maior do que 20, irá retornar a mensagem
//e junto à essa mensagem, irá retornar o valor undefined
console.log(area(5, 5));