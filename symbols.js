// symbols é uma maneira de gerar um indentificador unico.

const uniqueId = Symbol('hello');

// retorna um symbol sem nadar no console ou seja um symbol nunca é igual ao outro é indentificado unico que não advinhado e nem descrito.
console.log(uniqueId);

const uniqueId2 = Symbol('hello');

console.log(uniqueId2 === uniqueId);
//é possivel passa um palametro para a função  symbol porem apenas para questão de debug  ou seja o id continua sendo unico.
parseFloat(100/100.20).toFixed
