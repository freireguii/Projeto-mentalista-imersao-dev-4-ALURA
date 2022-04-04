var numeroSecreto = parseInt(Math.random() * 11);
var contador = 1;

function Chutar() {
    var elemento = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");

    if (contador > 3) {
        elementoResultado.innerHTML = "Você excedeu as 3 tentativas.";
    }

    while (contador <= 3) {
        if (elemento == numeroSecreto) {
            elementoResultado.innerHTML = "Parabéns, você acertou.";
            return;
        } else if (elemento > 10 || elemento < 0) {
            elementoResultado.innerHTML = "Você deve escolher um número entre 0 e 10";
        } else {
            elementoResultado.innerHTML = "Você errou.";
            contador++;
            return;
        }
    }
}