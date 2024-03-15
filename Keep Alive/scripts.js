window.addEventListener('load', function() {
  startTimer()
})

let countdown = document.getElementById("time")
let remainingTime = 30

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