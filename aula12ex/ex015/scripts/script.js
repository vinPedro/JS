function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('iano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('Verifique os dados e tente novamente!')
    }
    else{
        var fSex = document.getElementsByName('sexo')
        var idade = ano - fAno.value

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fSex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <= 10){
                img.src = 'imagens/criançaM.jpg' 
            }
            else if( idade < 21){
                 img.src = 'imagens/rapaz.jpg'
            }
            else if ( idade < 60){
                 img.src = 'imagens/homem.jpg'
            }
            else{
                 img.src = 'imagens/idoso.jpg'
            }
        }
        else{
            genero = 'Mulher'

            if(idade >= 0 && idade <= 10){
                img.src = 'imagens/menina.jpg'
            }
            else if( idade < 21){
                 img.src = 'imagens/moça.jpg'
            }
            else if ( idade < 60){
                 img.src = 'imagens/mulher.jpg'
            }
            else{
                 img.src = 'imagens/idosa.jpg'
            }
        }

        

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }


}