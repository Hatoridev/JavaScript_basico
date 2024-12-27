// Seleciona os elementos HTML pela ID
const lampada = document.getElementById("lampada"); // A imagem da lâmpada
const btnLigar = document.getElementById("btnLigar"); // O botão "Ligar"
const btnDesligar = document.getElementById("btnDesligar"); // O botão "Desligar"

// Função para ligar a lâmpada
function ligar() {
  lampada.src = "https://images.app.goo.gl/nx1yK6txBFefLmgSA"; // Altera a imagem para lâmpada acesa
}

// Função para desligar a lâmpada
function desligar() {
  lampada.src = "https://images.app.goo.gl/zCwz36CLvioknpP87"; // Altera a imagem para lâmpada apagada
}

// Adiciona os eventos de clique nos botões
btnLigar.addEventListener("click", ligar); // Aciona a função ligar ao clicar no botão "Ligar"
btnDesligar.addEventListener("click", desligar); // Aciona a função desligar ao clicar no botão "Desligar"

