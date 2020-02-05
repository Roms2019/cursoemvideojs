let agora = new Date()
let diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
    console.log{'Domingo'}
    break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    Case 3:
    console.log('Quarta') 
    break
    Case 4:
    console.log('Quinta')
    break
    Case 5:
    console.log('Sexta')
    break
    Case 6:
    console.log('Sábado')
    break
    default:
    console.log('[ERRO] Dia inválido')

}