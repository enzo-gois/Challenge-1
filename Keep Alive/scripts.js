const apiKey = "e96a1bd0cd18c8d91dca4aff44314adb"

window.addEventListener('load', function() {
  cidadeUsuario = JSON.parse(localStorage.getItem('usuarioLogado'))
  showWeather(cidadeUsuario[0])
  startTimer()
  updateClock()
  setData()
})

const clock = document.getElementById("clock")
const date = document.getElementById("date")
const cityWeather = document.getElementById("city-weather") 
const tempWeather = document.getElementById("temp-weather")
let countdown = document.getElementById("time")
let remainingTime = 30

function updateClock() {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2,'0')
  clock.textContent = `${hours}:${minutes}`
}

function setData() {
  const todayDate = document.getElementById("date") 

  const date = new Date()
  const year = date.getFullYear()
  const monthDay = date.getDate().toString().padStart(2,'0')  
  let month = (date.getMonth() + 1).toString()
  let weekDay = date.getDay().toString()

  switch(month){
    case '1': month = "janeiro"
      break
    case '2': month = "fevereiro"
      break
    case '3': month = "março"
      break
    case '4': month = "abril"
      break
    case '5': month = "maio"
      break
    case '6': month = "junho"
      break
    case '7': month = "julho"
      break
    case '8': month = "agosto"
      break
    case '9': month = "setembro"
      break
    case '10': month = "outubro"
      break
    case '11': month = "novembro"
      break
    case '12': month = "dezembro"
  }

  switch(weekDay){
    case '0': weekDay = "domingo"
      break
    case '1': weekDay = "segunda-feira"
      break
    case '2': weekDay = "terça-feira"
      break
    case '3': weekDay = "quarta-feira"
      break
    case '4': weekDay = "quinta-feira"
      break
    case '5': weekDay = "sexta-feira"
      break
    case '6': weekDay = "sábado"
      break
  }

  todayDate.textContent = `${weekDay}, ${monthDay} de ${month} de ${year}`
}

function startTimer() {
  setInterval(function() {
    if(remainingTime > 0) {
      remainingTime--
      updateTimer()
    } else {
      window.location.reload(true)
    }
  }, 1000)
}

function updateTimer() {
  let seconds = remainingTime
  countdown.textContent = seconds
}

const getWeatherAPI = async(city) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiURL)
  const data = await res.json()
  return data
}

const showWeather = async (city) => {
  const data = await getWeatherAPI(city)
  if(data.message == 'city not found'){
    cityWeather.textContent = 'cidade não encontrada'
  } else {
    cityWeather.textContent = data.name
    tempWeather.textContent = `${parseInt(data.main.temp)}°`
  }

}

function fazerLogout() {
  localStorage.setItem('usuarioLogado','[]')
  window.location.href = 'http://127.0.0.1:5500/Login/index.html?#'
}