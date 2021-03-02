//Aula ainda sobre o exemplo mostrando que 
//o this pode variar dependendo da chamada. 
//A aula também conterá a solução desse problema

function Pessoa() {
    this.idade = 0;

    //Corrigindo com o self, utilizar
    //esse modo é fazer com que o this (sendo executado dentro da função pessoa) 
    //sempre seja o mesmo.
    const self = this;

    //A função setInterval dispara outra função a partir do
    //determinado intervalo que você definir
    setInterval(function () {
        this.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //A cada um segundo, essa função anônima será disparada
}      //Corrigindo com bind


new Pessoa