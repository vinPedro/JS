var vel = Number(prompt('Qual é a velocidade atual do carro?')) // Prompt para o usuário digitar a velocidade do carro
console.log(`A velocidade do seu carro é ${vel}km/h`)

if (vel > 60) { // Condição simples
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Dirija sempre usando cinto de segurança!')

