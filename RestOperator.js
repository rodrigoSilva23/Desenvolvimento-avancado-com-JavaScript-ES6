// função que recebe N numero de argumento  forma antes  o ES6
function sum(a, b) {

    console.log(arguments) // a função arguments retorna um objeto com todos os argumentos passados

    // tratanto da função com arguments ante do  ES6
    var value = 0
    // pego a quantidade de argumento  e vou concatenando cada argumento no value
    for(var i=0; i<arguments.length; i++){
        value += arguments[i]
    }
    return  value
}

console.log(sum(1, 2,5,5,3,7,8,9,0));

//o E6 troce o rest operator  veio para facilita o uso de argumentos  para usar o rest operator (...) + o valor da sua variavel

function sum2(...rest) {
    console.log(rest) //o rest operator return um array com todos os argumentos passados ou seja é possivel usar os metodos de array
 
    return  rest.reduce((acc,value) => acc + value, 0)
}
console.log(sum2(1,2,5,5,3,7,8,9,0));

// quando a função é uma Arrow function o metodo "arguments" não irá funcionar dando o seguinte erro "a referencia arguments não foi definido "
/*
const sum3 = () => console.log(arguments);

console.log(sum3(1,2,5,5,3,7,8,9,0));
*/
// por tanto deve-se usar o rest operator para trabalhar N numeros de argumentos com arrow function

const sum4 = (a,b,...rest) => console.log(a,b,rest);// nota-se que é possivel escolher os paramentro que vão ser trabalhados

console.log(sum4(1,2,5,5,3,7,8));