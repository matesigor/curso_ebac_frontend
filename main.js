const form = document.getElementById('form-valida')

let formValido = false

function validarNumero(CampoA, CampoB) {
    return CampoB > CampoA
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let CampoA = parseFloat(document.getElementById('numeroA').value)
    let CampoB = parseFloat(document.getElementById('numeroB').value)

    const messagesucess = 'Seu formulário está correto! Conferindo: <b> Campo B maior que campo A </b>'
    const containermessagesucess = document.querySelector('.success-message')

    formValido = validarNumero(CampoA, CampoB)

    if (formValido) {
        document.querySelector('.error-message').style.display = 'none'
        containermessagesucess.innerHTML = messagesucess
        containermessagesucess.style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'

        CampoA.value = ''
        CampoB.value = ''
    } else {
        document.querySelector('.error-message').style.display = 'block'
        containermessagesucess.style.display = 'none'
    }    
})