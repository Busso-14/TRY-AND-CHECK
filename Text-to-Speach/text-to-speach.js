const textarea = document.getElementById("textarea");
const listen = document.getElementById("listen");
const selector = document.getElementById("selector");
const pauseBtn = document.getElementById("pause");

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelector = selector;
// let isPaused = false;
window.speechSynthesis.onvoiceschanged = () =>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i)=>(voiceSelector.options[i] = new Option(voice.name, i)));
};
voiceSelector.addEventListener("change", ()=>{
  speech.voice = voices[voiceSelector.value];
});

listen.addEventListener("click", ()=>{
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
  isPaused = false;
  pauseBtn.textContent = "Pause";
});
pauseBtn.addEventListener("click", () => {
  if (window.speechSynthesis.speaking && !isPaused) {
    window.speechSynthesis.pause();
    isPaused = true;
    pauseBtn.textContent = "Resume";
  } else if (isPaused) {
    window.speechSynthesis.resume();
    isPaused = false;
    pauseBtn.textContent = "Pause";
  }
});