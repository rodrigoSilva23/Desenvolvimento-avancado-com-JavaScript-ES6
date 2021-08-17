// forma sem o destruturação de pega valor de um array
var arr = ['Apple' , 'Banana' , 'Cherry',['orange']];
var apple = arr[0];
var banana = arr[1];
var cherry = arr[2];
var orange = arr[3][0];

// deve-se usar as chaves para que o valor seja destruído
var [apple2,banana2,cherry2,[orange2]] = ['apple', 'banana', 'cherry',['orange']];

console.log(orange2);

var obj = {
    name: 'rodrigo'
}
//var name = obj.name;

// usando o destruturação em um objeto
var {name} = obj;
console.log(name);

//usando destruturação em obj de obj
var obj2 = {
    name: name, 
    props:{
        age: 20

    }
};

var {
    name: name2,
    props:{age: age2}
} = obj2;

console.log(name2 +" idade: " +age2);