let inputs = document.querySelectorAll(".input");
let Qtdpergunta= document.querySelector('.Qtdpergunta');
let perguntas = document.querySelector('.pergunta');
let respostas = document.querySelector('.respostas');
let btn = document.querySelector('.btn');
let resumoContent = document.querySelector('.resumo');
let resT = document.querySelector('.resT');
let feicharBtn = document.querySelector('#feichar');
let Pcerta= document.querySelector('#Pcerta');
let Perrada = document.querySelector('#Perrada');
let btnRestart = document.querySelector('#btnRestart');


import perguntasAll from "./perguntasAll.js";


let currectasIndex = 0;
let respostaCorrecta = 0;

function activeLink(e) {
    inputs.forEach((item) => {
        item.classList.remove("active");

    });
 
    this.classList.add("active")

    if ( e.target.getAttribute("data-correct") === "true") {
        respostaCorrecta++;
        proximaPergunta();
    }
    else {
        console.log("errado")
        this.classList.add("errado");
        proximaPergunta();
        setTimeout(loadPerguntas, 500);

    }

}

function proximaPergunta (e) {

    if ( currectasIndex < perguntasAll.length - 1) {
        currectasIndex++;
        setTimeout(loadPerguntas, 500);
           
        
    }else {
        finish();
    }
}


function loadPerguntas() {
    Qtdpergunta.innerHTML = `${currectasIndex + 1} / ${perguntasAll.length}`;
    const item = perguntasAll[currectasIndex];
    respostas.innerHTML = "";
    perguntas.innerHTML = item.pergunta;

    item.respostas.forEach((resposta) => {
        const div = document.createElement("div");
        div.classList.add('teste')

        div.innerHTML = `
        <input type = "text" class="input" readonly data-correct="${resposta.correct}" value = "${resposta.Option}">
        
        `;
        respostas.appendChild(div);
    });
        document.querySelectorAll(".input").forEach((item) => {
            
        item.addEventListener("click", activeLink)
    
    });
}
        
    loadPerguntas();

function finish () {
    btn.classList.add('aparece');
    
    btn.addEventListener('click', () => { 
        resumoContent.classList.add('resumoActive');
        
        Pcerta.innerHTML = `${respostaCorrecta}`;
        let errado = perguntasAll.length - respostaCorrecta
        Perrada.innerHTML = `${errado}`;
        console.log(`voce acertou ${respostaCorrecta} - ${perguntasAll.length}`)
    });

    feicharBtn.onclick = function() {
        resumoContent.classList.remove("resumoActive");
    };
    
}
btnRestart.onclick = () => { 
    resumoContent.classList.remove("resumoActive");
    btn.classList.remove('aparece');
    currectasIndex = 0;
    respostaCorrecta = 0;
    loadPerguntas()

};

let data_IconGoogle = document.querySelector("[data_IconGoogle]");
let data_IconPhone = document.querySelector("[data_IconPhone]");

data_IconGoogle.addEventListener("click", function () {
    location.href = "http://www.google.com"
})

data_IconPhone.addEventListener("click", function () {
    alert("serviço de ligação indisponível");
})
