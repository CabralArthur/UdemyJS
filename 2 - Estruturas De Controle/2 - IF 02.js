function teste(num){
    //Um exemplo em que deve-se tomar cuidado na E.C. if é que,
    //Se você utilizar a função if e após ela não abrir o bloco de código denomidado pelas chaves
    if(num > 7)
        //A única parte ao bloco if da identação será a primeira linha de código
        console.log('Aprovado') 
        //Ou seja, por mais que essa parte esteja identada, ela não está considerada
        console.log(num) 
    //Logo, se você quer diversas sentenças de códigos, utilize as chaves.
    //Na verdade, é sempre bom utilizar as chaves
}

function teste2(num){
    if(num > 7 );{ //Cuidado com o ;, não utilizar com as estruturas de controle ;)
        console.log(num);
    }
}

teste2(6);
teste2(8);
