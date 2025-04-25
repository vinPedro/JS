function tabuada(){
    let num = document.getElementById('inumero').value
    let tab = document.getElementById('itabuada')

    if(num.length == 0){
        alert('Digite um número')
    }
    else{

        num = Number(num)
        let item = null
        tab.innerHTML = ''

        for(let i = 1; i < 11; i++){
            item = document.createElement('option') 
            item.text = `${num} X ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}