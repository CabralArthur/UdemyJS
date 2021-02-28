const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //Acessando saudação do objeto pessoa
    }
}

pessoa.falar();

const falar = pessoa.falar

falar() //Conflito entre paradigmas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) //bind() é utilizado para passar o objeto no qual você quer que seja resolvido o this

falarDePessoa(); //Imprimindo a mensagem de bom dia