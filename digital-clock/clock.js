// DIGITAL CLOCK PROGRAM

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  // to add the meridiam time 
  const meridiam = hours >= 12 ? "PM": "AM";
  hours = hours % 12 || 12;
  // to reassign if the hour is only one digit then add the start 0
  hours = hours.toString().padStart(2, 0); 
  // get the minutes and seconds
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  //get date component
  const dateComponents = {weekDay: "long", year: "numeric", month: "long", day: "numeric"};
  const dateString = now.toLocaleDateString("en-US",dateComponents);
  // get day
  const dayString = now.toLocaleDateString('en-UK', {weekday:"long"});
  //get the clock
  const clockString = `${hours}:${minutes}:${seconds} ${meridiam}`;
  document.getElementById("clock").textContent = clockString
  document.getElementById("date").textContent = dateString;
  document.getElementById("day").textContent = dayString;
}
updateClock();
setInterval(updateClock, 1000)