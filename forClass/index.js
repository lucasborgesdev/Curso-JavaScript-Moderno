
for (let i = 1; i <= 5; i++) {
    console.log(`Linha ${i}`);

}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);

}


const frutas = ['maça', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i]);
}
