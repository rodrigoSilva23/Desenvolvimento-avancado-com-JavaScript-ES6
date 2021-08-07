//Spread Operators (...)  traforma dos os array em um parametro para uma função.

const multiply = (...args) => args.reduce((acc, value) => acc * value);

// antes do Spread Operator era muito comun usa o metodo multiply.apply(undefined, rest); neste caso os parametro seria enviados para a função multiply.
const sum = (...rest) => multiply(...rest);// Spread Operators pegou o array  rest e transformou em um parametro para a função multiply.

console.log(sum(1, 2, 3, 4, 5));

/* o Spread Operator funciona com Strings, objetos literal,arrays e objetos iteraveis.
o mesmmo tem como objetivo quebra os item e passa para algum luga seja em varios parametros para uma função.
*/
const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

 // usando a function concact 

 console.log(array.concat(array2));
 // usando o Spread Operator
 console.log(...array, ...array2);

const str = "Digital Innovation One"
console.log(str)
//quebro a string e divivio 
console.log(...str);

const obj = {
    name: "IBM"
}
console.log(obj);
const obj2 = {...obj}
obj2.name = "Digital Innovation"
console.log(obj2)
