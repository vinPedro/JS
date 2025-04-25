var vetor= []
let res = document.getElementById('res')

function isNumero(n){
    return n >= 1 && n<= 100 ? true : false
}

function isList(v, n){
    if(v.indexOf(n) == -1){
        v.push(n)
        return true
    }
    return false
}

function adicionar(){

    let num = document.getElementById('inums')
    let list = document.getElementById('ilist')

    
    let n = Number(num.value)

    if(isNumero(n) && isList(vetor, n)){

        let option = document.createElement('option')
        option.text = `Seu número: ${n}`
        list.appendChild(option) 
        res.innerHTML = ''

    }

    else{
        alert('Digite um número valido ou esse número já foi digitado!')
    }

    num.value = ''
    num.focus()
    
}


function media(v){

    let med = 0
    for(let i in v){
        med += v[i]
    }

    return med/v.length
}

function finalizar(){

    if(vetor.length == 0){
        alert('Digite pelo menos 1 número!')
    }
    else{

        res.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${Math.max(...vetor)}. <br>`
        res.innerHTML += `O menor valor informado foi ${Math.min(...vetor)}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${vetor.reduce((acc, val) => acc + val, 0)}. <br>`

        // para não utilizar só de funções... Ps: poderia fazer usando reduce / length

        res.innerHTML += `A média dos valores digitados é ${media(vetor)}. <br>`
    }
        

}