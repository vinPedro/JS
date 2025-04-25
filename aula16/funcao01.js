function parimpar(n){
    return n %2 == 0 ? 'par' : 'impar'
}

console.log(parimpar(-2))

function somar(n=1, n1=1){ //podemos definir um paramentro padrao, caso não passarmos um!
    return n + n1
}

console.log(somar())

let va = function(){ //jogar uma função dentro de uma variavel
    return 'ola'
}

console.log(va())

function fatorial(n){ // função recursiva
    return n <= 1 ? 1 : n * fatorial(n-1)
}

console.log(fatorial(5))