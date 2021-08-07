 // exemplo de função  multiplicação

 function multiplica(a,b){  
  return a*b;
 }  

 console.log(multiplica(2)); // o resultado ira ser NaN, ja que o segundo argumento não foi passado

 function multiplica2(a,b){
     b =  typeof b === 'undefined' ? b : 1; // aqui o b é definido como 1, porque não foi passado
     return a*b;
     }

     console.log(multiplica2(2)); // o resultado ira ser 2, pois o b foi passado como 1

     function multiplica3(a,b = 1){
         return a*b;
         }
         console.log(multiplica3(2)); // o resultado ira ser 2, pois o b foi passado como 1, graças ao ES6 é possivel definir o valor default para um argumento

         



