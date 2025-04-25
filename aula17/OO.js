let amigo = {nome:'Pedro',
sexo:'M',
idade:21, 
peso:64.5, 
endordar(p=0){
    this.peso += p
}}

console.log(amigo.peso)
amigo.endordar(2)
console.log(amigo.peso)