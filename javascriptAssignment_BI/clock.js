let startElement = document.getElementById('start');
const timerElement = document.getElementById("timer");
let headingElement = document.getElementById("heading");
let stopElement = document.getElementById("stop")

let timer = null;  // The timer variable is null until the clock initializes

startElement.addEventListener("click", ()=>{ 
    timer = setInterval(runClock, 1000);  
});


//implementing stop function
stopElement.addEventListener("click", ()=>{
  if(timer !== null){
    clearInterval(timer);
    timer = null;
  }
})




function runClock() {
    timerElement.textContent = new Date().toLocaleTimeString();            
}

