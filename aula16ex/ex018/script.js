// pegando os itens do html
let num = document.getElementById('fnum')
let list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

// 2 passo: aki verifica se o valor está entre a regra proposta 1 a 100 (input do html)
function myNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// 3 passo: verifica se o valor já está atribuido ou nao na lista (select no html)
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    // 1 passo : validacao dos itens a serem atribuidos
    if (myNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let op = document.createElement('option')
        op.text += `Valor ${num.value} adicionado`
        list.appendChild(op)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    // remove o valor do campo do input, para escrever outro no lugar
    num.value = ''
    num.focus()
} 

// aki mostra as respostas definidas
function end() {
    if (valores.length == 0) {
        alert('Preencha os dados para finalizar.')
    } else {
        res.innerHTML = ''
        // tamanho da array
        let tam = valores.length
        res.innerHTML += `<p> Total de valores digitados é ${tam} </p>`

        // maior valor
        res.innerHTML += `<p> O maior valor foi ${Math.max(...valores)} </p>`

        // menor valor
        res.innerHTML += `<p> O menor valor foi ${Math.min(...valores)} </p>`

        // soma dos valores da array
        let reducer = (accumulator, currentValue) => accumulator + currentValue
        let soma = valores.reduce(reducer)
        res.innerHTML += `<p> A soma de todos os valore é ${soma} </p>`

        // media dos valores
        res.innerHTML += `A média dos valores é ${soma/tam}`
    }
}