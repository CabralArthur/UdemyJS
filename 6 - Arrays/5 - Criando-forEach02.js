//Criando própria função forEach

Array.prototype.forEach2 = function(callback){ //A função do prototype recebe um callback
    for(let i = 0; i < this.length; i++){ //E para cada interação
        callback(this[i], i, this) //Chamamos o callback passando 3 parâmetros
    }
}

const aprovados = ['Arthur', 'Luna', 'Lara']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice}) ${nome}`)
})