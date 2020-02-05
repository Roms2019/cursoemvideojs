function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours() + ':' + data.getMinutes()
    //var hora = 1
    msg.innerHTML = `${hora}`
    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = 'relógio/img/manhã1.jpg'
        document.body.style.background = '#d39a95'
        msg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 13 && hora <= 18) {
        //boa tarde
        img.src = 'relógio/img/tarde2.jpg'
        document.body.style.background = '#88b3c0'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else if (hora >=19 && hora <= 23) {
        //boa noite
        img.src = 'relógio/img/noite.jpg'
        document.body.style.background = '#8f6162'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}