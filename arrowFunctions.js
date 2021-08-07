// função simples

function log(message) {
    console.log(message);
}

log('testando a função')


// função com parâmetros anonimas

var soma = function(a, b) {

    //o return retorna um valor de uma função
    return a + b;
}

log(soma(1, 2))


//arrow function é uma função anonima para usa-la é necessario usar =>

soma2 = (a, b) => a + b; //como não temos variaveis declada nao precisamos usar {} e tambem não precisamos usar return

var obt ={ 
    showContent: function() {
        // variavel responsavel por resolve o problema de escopo
        var _that = this;
        
        setTimeout(function() {
            _that.log('oi')
            },
            1000
            );
    },
    log: function(message) {
        console.log(message);
    }
 }

 obt.showContent()

 //usando arrow function para resolve o problema de escop

 obt2 = {
     showContent: function showContent() {
        setTimeout(() => {
            this.log('oi')
            },
            1000
            );
        }
}