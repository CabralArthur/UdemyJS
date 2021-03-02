//Mostrando a diferença da utilização da Arrow Function
//Com relação ao this
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade) //Aqui o this não varia, mesmo com o código sendo chamado
        //A partir de um temporizador
    }, 1000)
}

new Pessoa