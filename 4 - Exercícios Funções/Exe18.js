/*

Faça um programa que leia um número entre 0 e 5, e escreva este número por extenso. 
Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

*/

leianum = function (num) {
    switch (num) {
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        default:
            console.log('Número fora do intervalo')
            break
    }
}
