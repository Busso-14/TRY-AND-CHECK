// stop watch
const watch = document.getElementById("clock");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;


function startBtn(){
  if(!isRunning){
    startTime = Date.now() - elapseTime;
    timer = setInterval(update, 10);
    // document.getElementById("timers").textContent = timer
    isRunning = true;
  }
};
function resetBtn(){
  clearInterval(timer);
  startTime = 0;
  elapseTime = 0;
  isRunning = false;

  watch.textContent = "00:00:00:00";
}
function stopBtn(){
  if(isRunning){
    clearInterval(timer);
    elapseTime = Date.now() - startTime;
    isRunning = false;
  }
}
function update(){
  const currentTime = Date.now();
  elapseTime = currentTime - startTime;

  let hours = Math.floor(elapseTime/ (1000 * 60 * 60));
  hours = hours.toString().padStart(2, 0);
  let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
  minutes = minutes.toString().padStart(2, 0);
  let seconds = Math.floor(elapseTime / 1000 % 60);
  seconds = seconds.toString().padStart(2, 0);
  let milliSeconds = Math.floor(elapseTime % 1000 / 10);
  milliSeconds = milliSeconds.toString().padStart(2, 0);

  watch.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;

}