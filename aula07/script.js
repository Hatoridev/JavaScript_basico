// 1. Operadores de comparação e atribuição
let a = 10; // Atribuindo o valor 10 à variável 'a'
let b = 20; // Atribuindo o valor 20 à variável 'b'

// Comparando se 'a' é igual a 'b' (operador ==)
document.getElementById('operador-comparacao').innerText = `A comparação de 'a' e 'b' (a == b) é: ${a == b}`; // false

// Comparando se 'a' é diferente de 'b' (operador !=)
document.getElementById('operador-comparacao').innerText += `\nA comparação de 'a' e 'b' (a != b) é: ${a != b}`; // true

// Atribuição com soma (operador +=)
a += 5; // 'a' agora é 15 (10 + 5)
document.getElementById('operador-comparacao').innerText += `\nA nova variável 'a' após a atribuição com soma (a += 5) é: ${a}`; // 15

// 2. Operadores aritméticos
let soma = 5 + 3; // 5 somado a 3 resulta em 8
let subtracao = 10 - 2; // 10 subtraído de 2 resulta em 8
let multiplicacao = 4 * 3; // 4 multiplicado por 3 resulta em 12
let divisao = 20 / 5; // 20 dividido por 5 resulta em 4

document.getElementById('operador-aritmetico').innerText = `
    Operadores Aritméticos:
    Soma (5 + 3): ${soma}
    Subtração (10 - 2): ${subtracao}
    Multiplicação (4 * 3): ${multiplicacao}
    Divisão (20 / 5): ${divisao}
`;

// 3. Operadores lógicos
document.getElementById('operador-logico').innerText = `
    Operadores Lógicos:
    AND (true && false): ${true && false} // false
    OR (true || false): ${true || false} // true
    NOT (!true): ${!true} // false
`;

// 4. Operador ternário
let idade = 18; // Definindo uma idade
let maiorIdade = idade >= 18 ? "Maior de idade" : "Menor de idade"; // Usando operador ternário para verificar se a idade é maior ou igual a 18
document.getElementById('operador-ternario').innerText = `Operador Ternário (idade >= 18): ${maiorIdade}`;

// 5. Operadores bit a bit
let bitAND = 5 & 3; // Operação AND bit a bit entre 5 (0101) e 3 (0011) resulta em 1 (0001)
let bitOR = 5 | 3; // Operação OR bit a bit entre 5 (0101) e 3 (0011) resulta em 7 (0111)
let bitXOR = 5 ^ 3; // Operação XOR bit a bit entre 5 (0101) e 3 (0011) resulta em 6 (0110)

document.getElementById('operador-bit').innerText = `
    Operadores Bit a Bit:
    AND bit a bit (5 & 3): ${bitAND}
    OR bit a bit (5 | 3): ${bitOR}
    XOR bit a bit (5 ^ 3): ${bitXOR}
`;

// 6. Acessando Índices de Arrays
let array = [10, 20, 30]; // Criando um array com 3 elementos
document.getElementById('acesso-array').innerText = `Acessando o índice 0 de um array: ${array[0]}`; // Acessando o primeiro elemento (10)

// 7. Deletando propriedades de objetos
let pessoa = {
    nome: "João", // Definindo a propriedade 'nome' no objeto
    idade: 25 // Definindo a propriedade 'idade' no objeto
};
delete pessoa.idade; // Deletando a propriedade 'idade' do objeto
document.getElementById('delete-propriedade').innerText = `Objeto após deletar a propriedade 'idade': ${JSON.stringify(pessoa)}`;

// 8. Complemento de Byte
let complemento = ~5; // Complemento de 5 (inverter todos os bits de 5)
document.getElementById('complemento-byte').innerText = `Complemento de Byte (~5): ${complemento}`;

// 9. Separando valores com o operador spread
let valores = [1, 2, 3, 4, 5]; // Criando um array com 5 elementos
document.getElementById('separacao-valores').innerText = `Separando os valores do array: ${[...valores].join(", ")}`; // Usando o operador spread para copiar e juntar os valores em uma string

// 10. Incremento e Decremento
let x = 5; // Inicializando a variável 'x' com o valor 5
x++; // Incrementando 'x' (x passa a ser 6)
document.getElementById('incremento-decremento').innerText = `Valor de 'x' após incremento (x++): ${x}`; // Exibindo o valor de 'x' após o incremento
x--; // Decrementando 'x' (x volta a ser 5)
document.getElementById('incremento-decremento').innerText += `\nValor de 'x' após decremento (x--): ${x}`; // Exibindo o valor de 'x' após o decremento

