function calc() {
    var num = document.getElementById('num')
    var selec = document.getElementById('selec')
    if (num.value.length == 0) {
        alert('[ERRO]')
    } else {
        var n1 = Number(num.value)
        selec.innerHTML = '' // aki limpa os resultados

        // pra fazer os resultados entrarem na tela
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            selec.value = `selec${c}` // esse serve mais para outras linguagens (tipo PHP)
            selec.appendChild(item)
        }
    }
}
// refazer pra aprender