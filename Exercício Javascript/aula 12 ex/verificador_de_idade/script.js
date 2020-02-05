function verificar(){
    window.alert('Funciona!')
    let date = new Date()
    let ano = data.getfullyear()
    let ano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    if(fano.value.length ==0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')   
    }else{
        let fsex = document.getElementsByName('radisex')
        let idade = ano = number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0], checked){
            gênero = 'Homem'
            if (idade >=0 && idade <= 12){
                //criança
                img.setAttribute('src','menino.jpg')
            }else if (idade >13){
                //jovem
                img.setAttribute('src','jovemM.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','Homem2.jpg')
            }else{
                //Idoso
                img.setAttribute('src','Homem.jpg')
            }    

        }else if(fsex[1],checked){
            if (idade >=0 && idade <= 12){
                //criança
                img.setAttribute('src','menina.jpg')
            }else if (idade >13){
                //jovem
                img.setAttribute('src','jovemF.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','mulher2.jpg')
            }else{
                //Idoso
                img.setAttribute('src','mulher.jpg')
            }    
        res,style.textAlign = 'center'
        res.innerHTML = ´Detectamos $(gênero) com $(idade) anos.´    }
        res.appendChild(img)
    }