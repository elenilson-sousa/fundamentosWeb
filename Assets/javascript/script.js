/**
 * JS é case sensitive
 * por tag: getElementByTagName()
 * por id: getElementById()
 * por nome: getElementsByName()
 * por classe: getElementsByClassName()
 * por seletor: querySelector()
 */

var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if(nome.value.length < 2){
         TxtNome.innerHTML = 'Nome inválido!'
         TxtNome.style.color = 'red'
         nomeOk = false
    }else{
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let TxtEmail = document.querySelector('#TxtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
            TxtEmail.innerHTML = 'email válido!'
            TxtEmail.style.color = 'green'  
            emailOk = true   
    }else{
        TxtEmail.innerHTML = 'email inválido!'
        TxtEmail.style.color = 'red'  
        emailOk = false
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 20 || assunto.value.length > 200){
        txtAssunto.innerHTML = 'O assunto precisa ter no mínimo 20 caracteres e no máximo 200!'
        txtAssunto.style.color = "red"
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = 'Texto enviado!'
        txtAssunto.style.color = "green"
        assuntoOk = true
    }
}



function Enviar(){
    if(nomeOk == true && emailOk == true){
        alert('preenchido corretamente, enviado!!')
    }else{
        alert('preencha o campo corretamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}
