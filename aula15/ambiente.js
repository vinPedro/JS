let num = [1, 5, 8, 9, 7]

num.push(10)
num.push(8)
num.push(9)

num.sort((a,b) => b- a) // sort ordena string, para trocar para Number utilizasse sort((a,b) => a - b) ou o inverso sort((a,b) => b- a)

// console.log(`Nosso vetor é o ${num}`)
// console.log(`Tamanho do vetor ${num.length}`)
// console.log(`Vetor ordenado ${num}`)

// num.forEach((elemento , indice) => {
//     console.log(`Elemento: ${elemento} no indice: ${indice}`)
// })

// for ( let pos in num){
//     console.log(`Elemento: ${num[pos]} no indice: ${pos}`)
// }

console.log(num.indexOf(1)) // retorna o index do elemento
