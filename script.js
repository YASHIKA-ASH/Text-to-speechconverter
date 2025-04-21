let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;
  speech.voice = voices[0];
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
}

window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[parseInt(voiceSelect.value)];
});

document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("textarea").value;
  if (text.trim() === "") return;
  speech.text = text;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});

