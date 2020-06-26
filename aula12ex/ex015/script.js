function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Preencha os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // criar elemento no html
        img.setAttribute('id', 'foto') // cria um id para o img, que serve para o CSS

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', '_imagem/criança.png') // cria/adiciona imagem por js
            } else if (idade <= 20) {
                img.setAttribute('src', '_imagem/jove.png')
            } else if (idade > 20 && idade <= 45) {
                img.setAttribute('src', '_imagem/homi.png')
            } else {
                img.setAttribute('src', '_imagem/vei.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', '_imagem/criançaf.png')
            } else if (idade <= 20) {
                img.setAttribute('src', '_imagem/jovef.png')
            } else if (idade > 20 && idade <= 45) {
                img.setAttribute('src', '_imagem/muie.png')
            } else {
                img.setAttribute('src', '_imagem/veia.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // aki emprime a imagem na tela
    }

}