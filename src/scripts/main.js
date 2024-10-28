import prettyMilliseconds from 'pretty-ms';

AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    var timer = setInterval(contador, 1000) 


    function contador() {
        
        const dataAniversario = new Date("Nov 23, 2024 00:00:00");
        var dataAtual = new Date();
        const tempoRestante = dataAniversario - dataAtual;
        const formatador = prettyMilliseconds(tempoRestante, { secondsDecimalDigits: 0 });

        if (tempoRestante > 0) {
            const subtitleClass = document.querySelector(".hero__content__subtitle")
            subtitleClass.innerHTML = `<h2 class="title--small">Começa em <span class="formatador">${formatador}<span/><h2/>`
        } else {
            const tempoFinalizado = dataAtual - dataAniversario;
            const formatadorFinalizado = prettyMilliseconds(tempoFinalizado, { secondsDecimalDigits: 0 });
            const subtitleClass = document.querySelector(".hero__content__subtitle")
            subtitleClass.innerHTML = `<h2 class="title--small">Aconteceu há <span class="formatador"> ${formatadorFinalizado} <span/></h2>`
        }
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('room__content__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for(let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('room__content__list--is-active')
        }

    }

})