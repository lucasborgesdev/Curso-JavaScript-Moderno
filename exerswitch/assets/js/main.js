const h1 = document.querySelector('.container h1');

const data = new Date();
h1.innerHTML = data.toString();

function switchgetDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
        default:
            return diaSemanaTexto;
    }  
    
}

function getDiaSemanaTexto(diaSemana){
    diasSemana=['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta','Sexta','Sabado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes){
    const meses = [
                    'Janeiro', 'Fevereiro', 'Março',
                    'Abril', 'Maio','Junho',
                    'Julho', 'Agosto','Setembro',
                    'Outubro','Novembro','Dezembro'
                ];
        return meses[numeroMes];
}

function switchGetNomeMes(numeroMes){
    let nomeMes;
    switch(numeroMes){
        case 0:
            nomeMes = 'jan';
            return nomeMes;
        case 1:
            nomeMes = 'fev';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'jun';
            return nomeMes;
        case 6:
            nomeMes = 'jul';
            return nomeMes;
        case 7:
            nomeMes = 'ago';
            return nomeMes;
        case 8:
            nomeMes = 'set';
            return nomeMes;
        case 9:
            nomeMes = 'out';
            return nomeMes;
        case 10:
            nomeMes = 'nov';
            return nomeMes;
        case 11:
            nomeMes = 'dez';
            return nomeMes;
    }  
    
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeDoMes = getNomeMes(numeroMes);
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeDoMes}` +
        ` de ${data.getFullYear()} `+
        `${zeroAEsquerda(data.getHours())}:`+
        `${zeroAEsquerda(data.getMinutes())}`
    )

}


h1.innerHTML = criaDate(data);
//h1.innerHTML = getDiaSemanaTexto(data.getDay());
//h1.innerHTML = getNomeMes(data.getMonth());
//console.log(getNomeMes(data.getMonth()));

//const h2 = document.querySelector('container h2');
//const data2 = new Date();

const h2 = document.querySelector('.container h2');
//const data = new Date();
h2.innerHTML = data.toLocaleDateString('pr-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});
