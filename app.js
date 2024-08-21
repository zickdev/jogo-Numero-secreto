
let listasdeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio() ;
tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak( texto , 'Brazilian Portugueses Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número de 0 a 10')
}
exibirMensagemInicial()



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
         exibirTextoNaTela('h1','Você Acertou! '); 
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
         let mensagemTentativa =`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa} !` 
         exibirTextoNaTela('p', mensagemTentativa);
         document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoNaTela('p','O numero secreto é maior');

        }
        tentativas++;   
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 + 1);
   let quantidadesdeElementosNaLista = listasdeNumerosSorteados.length;

   if(quantidadesdeElementosNaLista == numeroLimite){
    listasdeNumerosSorteados = [];
   }




   if (listasdeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
    
   } else {
    listasdeNumerosSorteados.push(numeroEscolhido);
    console.log(listasdeNumerosSorteados);
    return numeroEscolhido;
    
   }
   
   
    
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}
