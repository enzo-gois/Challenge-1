let inputName = document.getElementById("name")
let inputPassword = document.getElementById("password")
let inputContainer = document.querySelector(".input-container")

inputName.addEventListener("click", () => {
  let userIcon = document.getElementById("userIcon")
  let passwordIcon = document.getElementById("passwordIcon")

  userIcon.style.marginLeft = 0;
  userIcon.style.position = "relative"
  userIcon.style.right = "40px"

  passwordIcon.style.marginLeft = 0;
  passwordIcon.style.position = "relative"
  passwordIcon.style.right = "40px"
} )

inputContainer.addEventListener("focusout", () => {
  let userIcon = document.getElementById("userIcon")
  let passwordIcon = document.getElementById("passwordIcon")

  if(inputName.value.length == 0 && inputPassword.value.length == 0) {

    userIcon.style.marginLeft = "18px";
    userIcon.style.position = "relative"
    userIcon.style.right = 0

    passwordIcon.style.marginLeft = "18px";
    passwordIcon.style.position = "relative"
    passwordIcon.style.right = 0
  }

} )

function logIn() {
  let userName = document.getElementById("name")
  let userPassword = document.getElementById("password")
  let msgError = document.getElementById("msgError")
  let listaDeUsuarios = []

  let usuarioValido = {
    nome: '',
    email: '',
    pais: '',
    cidade: '',
    senha: ''
  }

  listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'))

  listaDeUsuarios.forEach((item) => {
    if(userName.value == item.firstName && userPassword.value == item.password 
      || userName.value == item.email && userPassword.value == item.password) {
        usuarioValido = {
          nome: item.firstName,
          email: item.email,
          pais: item.country,
          cidade: item.city,
          senha: item.password
        }
    }
  })

  if(userName.value == usuarioValido.nome && userPassword.value == usuarioValido.senha) {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || '[]')
    usuarioLogado.push(usuarioValido.cidade)
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    window.location.href = "http://127.0.0.1:5500/Keep%20Alive/index.html"
  } else {
    userName.setAttribute('style', 'border-color: #E9B425')
    userPassword.setAttribute('style', 'border-color: #E9B425')
    msgError.setAttribute('style', 'display: flex')
  }
}