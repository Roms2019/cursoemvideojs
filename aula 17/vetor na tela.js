let valores = [5,8,2,9,3]
num.push(1)
valores.sort()
//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos=0; pos < valores.length; pos++){
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}
*/

for(let pos in valores) {
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
  
console.log(`O valor 8 está na posição ${pos}`)
}