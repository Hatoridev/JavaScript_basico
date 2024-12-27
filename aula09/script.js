// Função que calcula o IMC
function calcularIMC() {
    // Obtém o formulário pelo seu ID
    var formulario = document.getElementById("formulario");
    
    // Obtém o valor do peso em quilos do formulário
    var kilos = formulario.kilos.value;
    
    // Obtém o valor da altura em metros do formulário
    var metros = formulario.metros.value;
    
    // Obtém o valor dos centímetros adicionais do formulário
    var centimetros = formulario.centimetros.value;
    
    // Converte a altura total em metros para o valor correto, considerando os centímetros
    var altura = (metros * 100 + parseInt(centimetros)) / 100;
    
    // Calcula o IMC utilizando a fórmula: IMC = peso / (altura * altura)
    var imc = kilos / (altura * altura);
    
    // Exibe o valor do IMC calculado no campo de IMC do formulário, arredondado para 2 casas decimais
    formulario.imc.value = imc.toFixed(2);
}

