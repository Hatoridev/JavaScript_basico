// Criando um Array Associativo em JavaScript
// Em um array associativo, as chaves podem ser strings, ao invés de índices numéricos.
var arrayAssociativo = {
    nome: "João",           // A chave 'nome' contém o valor 'João'
    idade: 30,              // A chave 'idade' contém o valor 30
    cidade: "São Paulo"     // A chave 'cidade' contém o valor 'São Paulo'
};

// Exibindo o array associativo no console
console.log("Array Associativo:");
console.log(arrayAssociativo);

// Acessando e exibindo o valor da chave 'nome' do array associativo
console.log("Nome: " + arrayAssociativo.nome);

// Acessando e exibindo o valor da chave 'idade' do array associativo
console.log("Idade: " + arrayAssociativo.idade);

// Acessando e exibindo o valor da chave 'cidade' do array associativo
console.log("Cidade: " + arrayAssociativo.cidade);

// Exibindo o resultado do array associativo diretamente na página HTML
document.getElementById("resultado-associativo").innerHTML = `
    <p><strong>Nome:</strong> ${arrayAssociativo.nome}</p>
    <p><strong>Idade:</strong> ${arrayAssociativo.idade}</p>
    <p><strong>Cidade:</strong> ${arrayAssociativo.cidade}</p>
`;

// Criando um Array Multidimensional em JavaScript
// Um array multidimensional é basicamente um array dentro de outro array
var arrayMultidimensional = [
    [1, 2, 3],          // Primeira sublista, com os números 1, 2 e 3
    [4, 5, 6],          // Segunda sublista, com os números 4, 5 e 6
    [7, 8, 9]           // Terceira sublista, com os números 7, 8 e 9
];

// Exibindo o array multidimensional no console
console.log("Array Multidimensional:");
console.log(arrayMultidimensional);

// Acessando e exibindo o valor do índice [0][0] do array multidimensional (primeiro valor da primeira sublista)
console.log("Primeiro valor do array multidimensional: " + arrayMultidimensional[0][0]);

// Acessando e exibindo o valor do índice [1][2] do array multidimensional (último valor da segunda sublista)
console.log("Último valor da segunda sublista: " + arrayMultidimensional[1][2]);

// Exibindo o resultado do array multidimensional diretamente na página HTML
document.getElementById("resultado-multidimensional").innerHTML = `
    <p><strong>Primeiro valor do array multidimensional:</strong> ${arrayMultidimensional[0][0]}</p>
    <p><strong>Último valor da segunda sublista:</strong> ${arrayMultidimensional[1][2]}</p>
    <p><strong>Array completo:</strong> ${JSON.stringify(arrayMultidimensional)}</p>
`;

