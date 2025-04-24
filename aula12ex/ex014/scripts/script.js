function carregar(){
    var msg = document.getElementById('msg')
    var sec = document.getElementById('sec')
    var ima = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var mim = date.getMinutes()

    msg.innerHTML = `${hora} : ${mim}`

    if(hora < 12){
        document.body.style.color = `black`
        document.body.style.backgroundColor = 'rgba(235, 221, 159, 0.562)'
        sec.style.backgroundColor = 'rgb(235, 221, 159)'
        ima.src='imagens/pexels-simon73-1266810.jpg'
    }

    else if(hora < 19){
        document.body.style.backgroundColor = 'rgba(236, 139, 49, 0.514)'
        sec.style.backgroundColor = 'rgb(236, 139, 49)'
        ima.src='imagens/pexels-anderson-martinsz-2386144.jpg'
    }

    else{
        document.body.style.backgroundColor = 'rgba(37, 50, 78, 0.466)'
        sec.style.backgroundColor = 'rgb(37, 50, 78)'
        ima.src='imagens/pexels-pixabay-414144.jpg'
    }

}
 

