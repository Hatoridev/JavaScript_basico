// Função que verifica se o número é positivo, negativo ou zero
function verificarNumero() {
    // Obtém o valor inserido pelo usuário no campo de entrada
    var numero = document.getElementById("numero").value;

    // Converte o valor inserido para um número, caso não seja
    numero = Number(numero);

    // Obtém o elemento com id "resultado" onde o resultado será mostrado
    var resultadoDiv = document.getElementById("resultado");

    // Verifica se o número é maior que zero
    if (numero > 0) {
        // Se for positivo, exibe uma mensagem em verde
        resultadoDiv.textContent = "O número " + numero + " é positivo!";
        resultadoDiv.className = "resultado positivo"; // Aplica a classe de cor verde
    }
    // Verifica se o número é menor que zero
    else if (numero < 0) {
        // Se for negativo, exibe uma mensagem em vermelho
        resultadoDiv.textContent = "O número " + numero + " é negativo!";
        resultadoDiv.className = "resultado negativo"; // Aplica a classe de cor vermelha
    }
    // Caso o número seja igual a zero
    else {
        // Exibe a mensagem em azul
        resultadoDiv.textContent = "O número é zero!";
        resultadoDiv.className = "resultado zero"; // Aplica a classe de cor azul
    }
}

