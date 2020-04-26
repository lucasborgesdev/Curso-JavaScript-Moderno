function ePaisagem(largura, altura) {
    //return largura > altura ? true : false;
    //funciona do mesmo jeito 
    return largura >= altura;
}
//console.log(ePaisagem(100, 80))

// a
function verificaNumero(numero) {
    if(numero %3 == 0){
        console.log(`O numero ${numero} é divisivel por 3`)
    }
}

//console.log(verificaNumero(6))

function fizzBuzz(numero) {
    if(typeof numero != 'number' ) return Nan;
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'fizzBuzz';
    if (numero % 3 === 0 ) return 'fizz';
    if (numero % 5 === 0 ) return 'Buzz';
    
    return numero;
}

for (let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}
