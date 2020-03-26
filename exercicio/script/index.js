
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado =  document.querySelector('.resultado');

    const pessoas = [];
    
    
//    let contador = 1;

    function recebeEventoForm(evento){
  //      evento.preventDefault();
    //    console.log(`Form não foi enviado ${contador}`);
      //  contador++;
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas);
        resultado.innerHTML += `
                                <p>${nome.value}</p><br>
                                <p>${sobrenome.value}</p><br>
                                <p>${peso.value}</p><br>
                                <p>${altura.value}</p><br>
                              `
    }

    form.addEventListener('submit', recebeEventoForm);

    
    };

meuEscopo();