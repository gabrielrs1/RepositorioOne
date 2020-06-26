function calc() {
    var takeStart = document.getElementById('start')
    
    var startNum = Number(takeStart.value)

    var takeEnd = document.getElementById('end')
    var endNum = Number(takeEnd.value)

    var takeSteps = document.getElementById('steps')
    var stepsNum = Number(takeSteps.value)

    var takeResp = document.getElementById('resp')

    if (takeStart.value == 0 || takeEnd.value == 0) {
        alert('[ERRO] Verifique os dados')
    } else if (startNum > endNum) {
        // Contagem descrecente
        takeResp.innerHTML = 'Contando: <br/>'
        while (endNum <= startNum) {
            if (stepsNum == 0) {
                stepsNum = 1
            }
            takeResp.innerHTML += `${startNum} \u{27A1} `
            startNum -= stepsNum
        }
    } else {
        // Contagem crescente
        takeResp.innerHTML = 'Contando: <br/>'
        while (startNum <= endNum) {
            if (stepsNum == 0) {
                stepsNum = 1
            }
            takeResp.innerHTML += `${startNum} \u{27A1} `
            startNum += stepsNum
        }
    }
    takeResp.innerHTML += 'FIM'
}

