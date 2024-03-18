let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let birthDate = document.getElementById("birthDate")
let country = document.getElementById("country")
let city = document.getElementById("city")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")

let butaoCadastra = document.getElementById("butaoCadastra")

butaoCadastra.addEventListener("click", function cadastraUsuario(e) {
  e.preventDefault()

  let validName = checkName()
  let validLastName = checkLastName()
  let validEmail = checkEmail()
  let validBirthDate = checkBirthDate()
  let validPassword = checkPassword()
  let comparePassword = checkConfirmPassword()
  let validCountry = checkCountry()
  let validCity = checkCity()

  if(validName && validLastName && validPassword && comparePassword && validEmail
    && validBirthDate && validCountry && validCity) {
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios') || '[]')
    Toastify(msgSuccesRegister).showToast()
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
    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/Login/index.html?#'
    }, 3000);
  }
} )



function checkName() {
  let letra = firstName.value
  if(letra.indexOf(' ') >= 0) {
    Toastify(msgErrorName).showToast()
    return false
  } else if(letra == null) {
    return false
  } else {
    return true
  }
}

function checkLastName() {
  let letra = lastName.value
  if(letra.indexOf(' ') >= 0) {
    Toastify(msgErrorLastName).showToast()
    return false
  } else if(letra == null) {
    return false
  } else {
    return true
  }
}

function checkEmail() {
  const validaEmail = /[a-z0-9]+@+[a-z0-9]+.+[a-z0-9]/
  if(validaEmail.test(email.value)){
    return true
  } else if(email.value == ''){
    return false
  } else {
    Toastify(msgErrorEmail).showToast()
    return false
  }
}

function checkBirthDate() {
  const validDate = /\d{2}\/\d{2}\/\d{4}/
  if(validDate.test(birthDate.value)){
    return true
  } else if(birthDate.value == '') {
    return false
  } else {
    Toastify(msgErrorDate).showToast()
    return false
  }
}

function checkPassword() {
  if(password.value.length >= 4 ) {
    return true
  } else if(password.value == '') {
    return false
  } else {
    Toastify(msgErrorPassword).showToast()
    return false
  }
}

function checkConfirmPassword() {
  if(confirmPassword.value != password.value) {
    Toastify(msgErrorComparePassword).showToast()
    return false
  } else if(confirmPassword.value == '') {
    return false
  } else {
    return true
  }
}

function checkCountry() {
  if(country.value == ''){
    Toastify(msgErrorCountry).showToast()
    return false
  } else {
    return true
  }
}

function checkCity() {
  if(city.value == ''){
    Toastify(msgErrorCity).showToast()
    return false
  } else {
    return true
  }
}

const toastStyle = {
  padding: '30px',
  fontSize: '24px',
  color: 'white',
  background: "#e74c3c",
}

let msgErrorName = {
  text: "O Nome não pode conter espaços",
  position: "left",
  style: toastStyle,
}

let msgErrorLastName = {
  text: "O último nome não pode conter espaços",
  position: "left",
  style: toastStyle,
}

let msgErrorEmail = {
  text: "O email deve conter @ e .",
  position: "left",
  style: toastStyle,
}

let msgErrorDate = {
  text: "A data de nascimento tem que ter o formato DD/MM/YYYY !",
  position: "left",
  style: toastStyle,
}

let msgErrorPassword = {
  text: "A senha deve ter no mínimo 4 caracteres!",
  position: "left",
  style: toastStyle,
}

let msgErrorComparePassword = {
  text: "As senhas não conferem!",
  position: "left",
  style: toastStyle,
}

let msgErrorCountry = {
  text: "Preencha o campo de Country!",
  position: "left",
  style: toastStyle,
}

let msgErrorCity = {
  text: "Preencha o campo de City!",
  position: "left",
  style: toastStyle,
}

let msgSuccesRegister = {
  text: "Cadastro realizado com sucesso!",
  position: "left",
  style: {
    background: 'green',
    padding: '30px',
    fontSize: '24px',
    color: 'white',
  },
}