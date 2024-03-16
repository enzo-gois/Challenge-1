let firstName = document.getElementById("firstName")
let labelFirstname = document.getElementById("labelFirstName")
let validName

let lastName = document.getElementById("lastName")
let labelLastName = document.getElementById("labelLastName")
let validLastName

let birthDate = document.getElementById("birthDate")
let labelBirthDate = document.getElementById("labelBirthDate")
let validBirthDate

let country = document.getElementById("country")

let city = document.getElementById("city")

let email = document.getElementById("email")

let password = document.getElementById("password")
let labelPassword = document.getElementById("labelPassword")
let validPassword

let confirmPassword = document.getElementById("confirmPassword")
let labelConfirmPassword = document.getElementById("labelConfirmPassword")
let validConfirmPassword

let butaoCadastra = document.getElementById("butaoCadastra")
const form = document.querySelector('form') 

function cadastraUsuario() {
  let validEmail = checkEmail()
  if(validName && validLastName && validPassword && validConfirmPassword && validEmail) {
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios') || '[]')

    listaDeUsuarios.push(
    {
      firstName: firstName.value,
      lastName: lastName.value,
      birthDate: birthDate.value,
      country: country.value,
      city: city.value,
      email: email.value,
      password: password.value
    })

    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios))

    window.location.href = 'http://127.0.0.1:5500/Login/index.html?#'
  }
}

firstName.addEventListener('keyup', () => {
  let letra = firstName.value
  if(letra.indexOf(' ') >= 0 || letra.length <= 2) {
    labelFirstname.style.color = 'red'
    validName = false
  } else {
    labelFirstname.style.color = 'green'
    validName = true
  }
})

lastName.addEventListener('keyup', () => {
  let letra = lastName.value
  if(letra.indexOf(' ') >= 0 || letra.length <= 2) {
    labelLastName.style.color = 'red'
    validLastName = false
  } else {
    labelLastName.style.color = 'green'
    validLastName = true
  }
})

function checkEmail() {
  const validaEmail = /[a-z0-9]+@+[a-z0-9]+.+[a-z0-9]/
  if(validaEmail.test(email.value)){
    return true
  } else {
    alert('O email precisa conter @ e .')
    return false
  }
}

password.addEventListener('keyup', () => {
  if(password.value.length <= 4 ) {
    labelPassword.style.color = 'red'
    validPassword = false
  } else {
    labelPassword.style.color = 'green'
    validPassword = true
  }
})

confirmPassword.addEventListener('keyup', () => {
  if(confirmPassword.value != password.value) {
    labelConfirmPassword.style.color = 'red'
    validConfirmPassword = false
  } else {
    labelConfirmPassword.style.color = 'green'
    validConfirmPassword = true
  }
})