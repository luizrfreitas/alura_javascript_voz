function vericacaoDeNumero(chute) {

    const numero = +chute;

    if (naoENumero(numero)){
        elementoChute.innerHTML += '<div>Use apenas números</div>';
    }

    if (outOfRange(numero)) {
        elementoChute.innerHTML += `<div> Use apenas números entre ${menorValor} e ${maiorValor}</div>`
        
    }

    if(numero === numeroSecreto){
        elementoChute.innerHTML += `
        Parábens! O número secreto é ${numeroSecreto}
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
 
}

function naoENumero(numero) {
    return Number.isNaN(numero)
}

function outOfRange(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})