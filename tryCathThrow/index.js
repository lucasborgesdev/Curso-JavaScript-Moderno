try {
    //console.log(naoExisto);
} catch(err) {
    //.log('naoExisto nao existe');
    //console.log(err)
}
function soma( x, y ) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number' ) 
        {
        throw new Error('x ou y precisam ser números. ');
    }
    return x+y;

}
try {
    //console.log(soma(1,5))
    //console.log(soma('1',5))
} catch (error) {
    //console.log(error);
}


// outro bloco de errro

try {
    console.log('***')

    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo')

    console.log('***')
    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também é final')
    }
    console.log('***')
} catch (e) {
    // é executado um erro
    console.log('Tratando o erro!');
} finally {
    //sempre
    console.log('FInal Eu sempre sou executado');

}
console.log('***')