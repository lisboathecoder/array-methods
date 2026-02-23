// NÍVEL 1 – Básico

// Copiando um Array
function copiarArray(array) {
    return [...array];
}
console.log("Cópia de Array:");
console.log(copiarArray([1, 2, 3]));

//  Adicionando um Item sem Alterar o Original
function adicionarItem(array, item) {
    return [...array, item];
}
console.log("2️⃣ Adicionando Item:");
console.log(adicionarItem(["🍎 Maçã", "🍌 Banana"], "🍊 Laranja"));

//  Combinando Dois Arrays
function combinarArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(" Combinando Arrays:");
console.log(combinarArrays([1, 2, 3], [4, 5, 6]));

// Cópia Segura
console.log(" Cópia Segura:");
const lista = [10, 20, 30];
const copia = [...lista];
copia.push(40);
console.log("Array original:", lista); // [10, 20, 30] - NÃO foi alterado
console.log("Array cópia:", copia);   // [10, 20, 30, 40]
console.log("Justificativa: O spread operator cria uma cópia rasa (shallow copy) do array.");

// NÍVEL 2 – Intermediário

// Atualizando Dados de um Objeto
function atualizarIdade(usuario, novaIdade) {
    return { ...usuario, idade: novaIdade };
}
console.log(" Atualizando Idade:");
console.log(atualizarIdade({ nome: "Ana", idade: 25 }, 26));

// Adicionando Propriedade Dinâmica
function adicionarPropriedade(objeto, chave, valor) {
    return { ...objeto, [chave]: valor };
}
console.log("Adicionando Propriedade:");
console.log(adicionarPropriedade({ nome: "João" }, "email", "joao@email.com"));

// Carrinho de Compras
function adicionarAoCarrinho(carrinho, novoProduto) {
    return [...carrinho, novoProduto];
}
console.log(" Carrinho de Compras:");
console.log(adicionarAoCarrinho(
    [{ nome: "Teclado", preco: 200 }],
    { nome: "Mouse", preco: 150 }
));

// Mesclando Listas
const carnes = ["🥩"];
const massas = ["🍝"];
const sobremesas = ["🍰"];
const menuCompleto = [...carnes, ...massas, ...sobremesas];
console.log(" Menu Completo:", menuCompleto);

// NÍVEL 3 – Funções e Argumentos

// Spread em Funções
function somarTresNumeros(a, b, c) {
    return a + b + c;
}
const numeros = [10, 20, 30];
console.log(" Soma com Spread:", somarTresNumeros(...numeros));

//  Erro Controlado
console.log(" Erro Controlado:");
const numerosFaltantes = [10, 20];
console.log("Resultado:", somarTresNumeros(...numerosFaltantes)); // Resultado: NaN
console.log("Justificativa: O terceiro parâmetro fica undefined, e undefined + número = NaN");

//  NÍVEL 4 – Avançado

//  Atualização de Perfil
function atualizarPerfil(usuario, novosDados) {
    return { ...usuario, ...novosDados };
}
console.log(" Atualizar Perfil:");
console.log(atualizarPerfil(
    { nome: "Maria", idade: 30, cidade: "São Paulo" },
    { idade: 31, cidade: "Rio de Janeiro" }
));

//  Configurações do Sistema
function configurarSistema(padrao, usuario) {
    return { ...padrao, ...usuario };
}
console.log("Configurações do Sistema:");
console.log(configurarSistema(
    { tema: "escuro", idioma: "pt-BR", notificacoes: true },
    { tema: "claro", notificacoes: false }
));

//  Jogo da Velha
function fazerJogada(tabuleiro, posicao, simbolo) {
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[posicao] = simbolo;
    return novoTabuleiro;
}
console.log(" Jogo da Velha:");
console.log(fazerJogada(["", "", "", "", "", "", "", "", ""], 4, "X"));

// DESAFIO FINAL
console.log(" Por que Spread é fundamental em React:");
console.log(`
O Spread Operator é crucial em React porque:
1. IMUTABILIDADE: Permite atualizar estado sem modificar o original
2. PROPS: Facilita propagar propriedades entre componentes
3. ESTADO: Essencial para copiar e atualizar objetos de estado
4. PERFORMANCE: React detecta mudanças comparando referências
5. PREDIBILIDADE: Evita efeitos colaterais e bugs difíceis de rastrear
`);