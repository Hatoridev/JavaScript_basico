// 1. Declarando a constante 'nome' e atribuindo o valor "João"
const nome = "João"; // 'nome' não pode ser alterado depois de atribuído
// Tentando reatribuir causaria um erro, pois 'nome' é constante:
// nome = "Carlos"; // Isso geraria um erro.

// 2. Declarando uma constante que armazena um objeto
const pessoa = {
    nome: "Maria", // Nome da pessoa
    idade: 28 // Idade da pessoa
};

// 3. Podemos modificar as propriedades do objeto, mas não podemos reatribuir o objeto inteiro
pessoa.idade = 29; // Modificando a idade
pessoa.nome = "Ana"; // Mudando o nome

// 4. Constantes com arrays também podem ser manipuladas, mas a referência do array não pode ser alterada
const numeros = [1, 2, 3]; // Definindo um array constante
numeros.push(4); // Adicionando um item ao array. Isso é permitido!

// Tentativa de reatribuição causaria erro:
// numeros = [10, 20]; // Isso causaria erro, pois a constante não permite mudar a referência.

// 5. Constantes com valores especiais: Infinity e NaN
const infinito = Infinity; // Representa um valor numérico infinito
const naoNumero = NaN; // Representa um valor inválido (Not-a-Number)

// 6. Função que exibe os resultados no HTML
function exibirResultados() {
    const resultados = document.getElementById("resultados"); // Seleciona o elemento no HTML

    // Injetando os resultados no HTML usando template literals
    resultados.innerHTML = `
        <h2>Resultados das Constantes:</h2>
        <p><strong>Nome (constante):</strong> ${nome} (Tipo: ${typeof nome})</p>
        <p><strong>Objeto Pessoa (constante):</strong> ${JSON.stringify(pessoa)} (Tipo: ${typeof pessoa})</p>
        <p><strong>Array de Números (constante):</strong> ${numeros} (Tipo: ${typeof numeros})</p>
        <p><strong>Valor 'Infinity':</strong> ${infinito} (Tipo: ${typeof infinito})</p>
        <p><strong>Valor 'NaN':</strong> ${naoNumero} (Tipo: ${typeof naoNumero})</p>
    `;
}

// 7. Chamando a função para exibir os resultados assim que a página for carregada
window.onload = exibirResultados;

