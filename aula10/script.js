// Declaração de uma função chamada 'dividir' que recebe dois parâmetros: x e y
function dividir(x, y) {
    // A função retorna o resultado da divisão de x por y
    return x / y;
}

// Chama a função 'dividir' com os argumentos 6 e 2, e armazena o resultado em uma variável
var resultadoDivisao = dividir(6, 2);

// Exibe o resultado da operação no elemento com o id 'resultado' na página HTML
document.getElementById("resultado").textContent = "6 dividido por 2 é: " + resultadoDivisao;

