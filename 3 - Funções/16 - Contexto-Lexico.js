//Aula sobre contexto léxico 
//(o contexto no qual as coisas foram declaradas dentro da linguagem)

const valor = 'Global'

//A função carrega consigo as informações de onde
//ela foi definida.
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    //Embora ela esteja sendo chamada em outro local
    //ela carrega o contexto de onde ela foi definida.
    minhaFuncao()
}

exec()