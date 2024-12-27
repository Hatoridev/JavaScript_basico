// Função para contar de 1 a 10 usando o loop for
function contar() {
    var resultado = ''; // Variável para armazenar o resultado da contagem
    for (var i = 1; i <= 10; i++) { // Início do loop for
        resultado += 'Número ' + i + '<br>'; // Concatena o número atual e uma quebra de linha ao resultado
    }

    // Exibe o resultado no HTML
    document.getElementById('resultado').innerHTML = resultado;
}

