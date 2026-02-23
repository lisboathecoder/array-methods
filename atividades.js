// forEach — Exibição simples
const nomes = ["Ana", "Carlos", "Bruna", "Diego"];

nomes.forEach(nome => {
    console.log(`Nome: ${nome}`);
});

// forEach — Cálculo com efeito colateral
const numeros = [2, 4, 23, 67]
numeros.forEach(num => {
    console.log(num * 2);
});

// map — Transformação de dados
const numerosParaQuadrado = [1, 2, 3, 4, 5];
const quadrados = numerosParaQuadrado.map(num => num ** 2);
console.log(quadrados);

//  map — Preparando dados para React
const alunos = ["João", "Maria", "Fábio"];
const alunosObjetos = alunos.map(nome => ({ nome, ativo: true }));
console.log(alunosObjetos);

// filter — Filtrando números
const numerosParaFiltrar = [10, 15, 20, 25, 30];
const maioresQue20 = numerosParaFiltrar.filter(num => num > 20);
console.log(maioresQue20);

// filter — Caso real de React
const tarefas = [
    { id: 1, titulo: "Estudar JS", concluida: true },
    { id: 2, titulo: "Praticar React", concluida: false },
    { id: 3, titulo: "Fazer exercícios", concluida: true }
];
const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
console.log(tarefasConcluidas);

// reduce — Soma simples
const valores = [10, 20, 30, 40];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(total);

// reduce — Contador
const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];
const contadorFrutas = frutas.reduce((contador, fruta) => {
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
}, {});
console.log(contadorFrutas);

//  Desafio — filter + map
const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];
const produtosCaros = produtos.filter(produto => produto.preco > 100).map(produto => produto.nome);
console.log(produtosCaros);

// Desafio React Mentality
/*
a) Renderizar uma lista na tela: map
     - Transforma cada item em componente

b) Somar o total de um carrinho: reduce
     - Acumula valores em um único resultado

c) Exibir apenas itens ativos: filter
     - Retorna novo array com itens que atendem condição

d) Apenas executar console.log para cada item: forEach
     - Executa ação sem retornar novo array
*/

// Gustavo Teixeira Lisboa