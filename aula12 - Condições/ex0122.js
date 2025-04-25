var data = new Date()
var hora = data.getHours()

console.log(hora)

if (hora < 6){
    console.log('Madrugada'); 
}

else if (hora < 12){
    console.log('Manhã');
}

else if (hora < 19){
    console.log('Tarde')
}

else{ 
    console.log('Noite');
}