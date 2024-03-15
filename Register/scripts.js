let firstName = document.getElementById("firstName")
let labelFirstname = document.getElementById("labelFirstName")
let validName

let lastName = document.getElementById("lastName")
let labelLastName = document.getElementById("labelLastName")
let validLastName

let birthDate = document.getElementById("birthDate")
let labelBirthDate = document.getElementById("labelBirthDate")

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
  if(validName && validLastName && validPassword && validConfirmPassword) {
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

  } else {
    alert("dados incorretos")
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