let a = 'A';
let b = 'B';
let c = 'C';

const xnumero =  [b,c,a];
[a,b,c] = xnumero; //Atribuição via desestruturação.


//***////****////*** */ */ */


const numeros = [1111,2222,34573,454514,5655655,6644456,7897947,811218,9,001];
//const primeiroNumero = numeros[0];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
const [um, dois, tres, ...restos] = numeros;

const [pri, , terc, , cinco, ,sete] =numeros;
//console.log(primeiroNumero,segundoNumero, terceiroNumero);
//console.log(resto)
//console.log(um,dois,tres);
//console.log(pri,terc,cinco,sete);


// ...rest, ...spread
//            0         1          2           
//         0  1  2   0  1, 2    0  1  2
numerosNovo =[[1, 2, 3],[4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numerosNovo;
console.log(seis);
// Ou

[lista1,lista2,lista3] = numerosNovo;
console.log(lista3);
console.log(lista3[1])



