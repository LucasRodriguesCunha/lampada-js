const botao = document.getElementsByClassName("botao")[0];
const lampada = document.getElementsByClassName("lampada")[0];

function seLampadaQuebrada() {
    return lampada.src.indexOf("quebrada") > -1;
}

function ativarLampada() {
    if (!seLampadaQuebrada()) {
        lampada.src = 'imagens/ligada.jpg';
    }
}

function desativarLampada() {
    if (!seLampadaQuebrada()) {
        lampada.src = 'imagens/desligada.jpg';
    }
}

function quebrarLampada() {
    lampada.src = 'imagens/quebrada.jpg';
}

function alternarLampada() {
    if (botao.textContent == "Ligar") {
        ativarLampada();
        botao.textContent = "Desligar";
    } else {
        desativarLampada();
        botao.textContent = "Ligar";
    }
}

botao.addEventListener("click", alternarLampada);
lampada.addEventListener("mouseover", ativarLampada);
lampada.addEventListener("mouseleave", desativarLampada);
lampada.addEventListener("dblclick", quebrarLampada);