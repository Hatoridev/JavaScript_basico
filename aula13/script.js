// Função para calcular o IMC e classificar o resultado com a estrutura if
function calcularIMC() {
    // Obtém os valores do formulário
    var formulario = document.getElementById("formulario"); // Pega o formulário
    var kilos = formulario.kilos.value; // Pega o valor do campo "kilos"
    var metros = formulario.metros.value; // Pega o valor do campo "metros"
    var centimetros = formulario.centimetros.value; // Pega o valor do campo "centimetros"

    // Converte a altura para metros (somando metros com centímetros)
    var altura = parseFloat(metros) + parseFloat(centimetros) / 100;

    // Calcula o IMC (Peso / Altura^2)
    var imc = parseFloat(kilos) / (altura * altura);

    // Exibe o IMC no campo de resultado
    document.getElementById("imc").value = imc.toFixed(2);

    // Classificação do IMC
    var classificacao = "";

    if (imc < 20) {
        classificacao = "Abaixo do Peso"; // Caso o IMC seja abaixo de 20
    } else if (imc >= 20 && imc <= 25) {
        classificacao = "Peso Ideal"; // Caso o IMC esteja entre 20 e 25
    } else if (imc > 25 && imc <= 30) {
        classificacao = "Sobrepeso"; // Caso o IMC esteja entre 25 e 30
    } else if (imc > 30 && imc <= 35) {
        classificacao = "Obesidade Moderada"; // Caso o IMC esteja entre 30 e 35
    } else if (imc > 35 && imc <= 40) {
        classificacao = "Obesidade Severa"; // Caso o IMC esteja entre 35 e 40
    } else if (imc > 40 && imc <= 50) {
        classificacao = "Obesidade Mórbida"; // Caso o IMC esteja entre 40 e 50
    } else {
        classificacao = "Super Obesidade"; // Caso o IMC seja maior que 50
    }

    // Exibe a classificação no campo de resultado
    document.getElementById("resultado").innerHTML = "Classificação: " + classificacao;
}

