const precosEmReais = [10, 20, 30, 40, 50];

const precoEmDolares = precosEmReais.map(preco => preco * 5);

const precoEmRublo = precosEmReais.map(preco => preco * 14.85)


console.log(precoEmDolares)
console.log(precoEmRublo)

const temperaturaCelsius = [10, 43, 23];
const temperaturasFarentheit = temperaturaCelsius.map(temperatura => temperatura * 9/5 + 32);

console.log(temperaturasFarentheit);

const strings = ["fabio", "fiot", "maximo"];

const stringsUpper = strings.map (upper => upper.toUpperCase());

console.log(stringsUpper)
