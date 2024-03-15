window.addEventListener('load', function() {
  startTimer()
  updateClock()
  setData()
})

const clock = document.getElementById("clock")
const date = document.getElementById("date") 
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
  console.log(monthDay)
  console.log(month)
  console.log(weekDay)

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