// funcao para criar hora
function relogio() {
    
    function criarHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    console.log(criarHoraDosSegundos(10))

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
            }, 1000);
        }

        document.addEventListener('click', function(evento) {
            // lugar aonde da o click  ==> console.log(evento.target);
            const elemento = evento.target;
            if(elemento.classList.contains('zerar')) {
                clearInterval(timer);
                relogio.innerHTML = '00:00:00';
                segundos= 0;
            }
            if(elemento.classList.contains('pausar')) {
                clearInterval(timer);
                relogio.classList.add('pausado')
            }
            if(elemento.classList.contains('iniciar')) {
                relogio.classList.remove('pausado');
                clearInterval(timer);
                iniciarRelogio();
            }
        });

    //iniciar.addEventListener('click', function(event) {
    //    relogio.classList.remove('pausado');
    //    clearInterval(timer);
    //    iniciarRelogio();
    //});

    //pausar.addEventListener('click', function(event) {
    //    clearInterval(timer);
    //    relogio.classList.add('pausado')
    //});

    //zerar.addEventListener('click', function(event) {
    //    clearInterval(timer);
    //    relogio.innerHTML = '00:00:00';
    //    segundos= 0;
    //});

}
relogio();

