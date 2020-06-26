function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        img.src = '_imagens/manha.jpg'
        document.body.style.background = '#b6b849'
    } else if (hora >= 12 && hora <= 18) {
        // tarde
        img.src = '_imagens/tarde.jpg'
        document.body.style.background = '#c27106'
    } else {
        // noite
        img.src = '_imagens/noite.jpg'
        document.body.style.background = '#444040'
    }
}
