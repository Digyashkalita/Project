let startElement = document.getElementById("start");
const timerElement = document.getElementById("timer");
let headingElement = document.getElementById("heading");
let stopElement = document.getElementById("stop");
let dateElement = document.getElementById("date");

let timer = null; // The timer variable is null until the clock initializes

startElement.addEventListener("click", () => {
  if (timer == null) timer = setInterval(runClock, 1000);
});

//implementing stop function
stopElement.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

function runClock() {
  timerElement.textContent = new Date().toLocaleTimeString();
}

let today = new Date().toLocaleDateString();
dateElement.textContent = today;
