//Exemplo de callback (execute no browser)

//Acessando pelo DOM
document.getElementsByName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu')
}