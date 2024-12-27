// Criando um array indexado que contém números e strings
var arrayIndexado = [10, 20, 30, "JavaScript", "Array", 40, 50];

// Exibindo o array original no console
console.log("Array Original: " + arrayIndexado);

// Acessando e exibindo o valor do primeiro item do array (index 0)
console.log("Primeiro valor do array (index 0): " + arrayIndexado[0]);

// Acessando e exibindo o valor do último item do array (index 6)
console.log("Último valor do array (index 6): " + arrayIndexado[6]);

// Alterando o valor do item no índice 3, de "JavaScript" para "Novo Valor"
arrayIndexado[3] = "Novo Valor";

// Exibindo o array após a alteração do valor no índice 3
console.log("Array após alteração: " + arrayIndexado);

// Exibindo a quantidade de elementos no array (length)
console.log("Quantidade de elementos no array: " + arrayIndexado.length);

// Adicionando um novo valor ao final do array usando o método push()
arrayIndexado.push("Novo Elemento");

// Exibindo o array após adicionar um novo valor
console.log("Array após adicionar um novo valor: " + arrayIndexado);

// Removendo o último valor do array com o método pop()
arrayIndexado.pop();

// Exibindo o array após remover o último valor
console.log("Array após remover o último valor: " + arrayIndexado);

// Exibindo os resultados na página HTML, dentro da div com o id "resultado"
document.getElementById("resultado").innerHTML = `
    <p><strong>Array Original:</strong> ${arrayIndexado}</p>
    <p><strong>Primeiro valor (index 0):</strong> ${arrayIndexado[0]}</p>
    <p><strong>Último valor (index 6):</strong> ${arrayIndexado[6]}</p>
    <p><strong>Array após alteração do índice 3:</strong> ${arrayIndexado}</p>
    <p><strong>Quantidade de elementos no array:</strong> ${arrayIndexado.length}</p>
    <p><strong>Array após adicionar um novo valor:</strong> ${arrayIndexado}</p>
    <p><strong>Array após remover o último valor:</strong> ${arrayIndexado}</p>
`;

