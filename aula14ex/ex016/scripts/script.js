function contar(){
    let ini = document.getElementById('iinicio').value
    var fim = document.getElementById('ifim').value
    var pass = document.getElementById('ipasso').value
    var msg = document.getElementById('contagem')
    
    if(ini.length == 0 || fim.length == 0 || pass.length == 0){
        msg.innerHTML = 'Preencha Todos os Campos'
    }
    
    else{
        msg.innerHTML = 'Contando: '
        let c = Number(ini)
        let f = Number(fim)
        let p = Number(pass)

        if(p <= 0){
            msg.innerHTML = 'Passo Inválido! Considerando Passo = 1 <br>' 
            p = 1
        }

        if(f > c){
            for(c; c <= f; c += p){
            msg.innerHTML += ` ${c} \u{1F449}`
            } 

            msg.innerHTML += `\u{1F3C1}`
        }
        else{
            for(c; c >= f; c -= p){
                msg.innerHTML += ` ${c} \u{1F449}`
            } 
    
            msg.innerHTML += `\u{1F3C1}`
        }

        
    }

    

   
}