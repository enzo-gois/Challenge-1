window.addEventListener('load', function() {
  startTimer()
  updateClock()
})

let countdown = document.getElementById("time")
let remainingTime = 30

function updateClock() {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2,'0')
  clock.textContent = `${hours}:${minutes}`
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