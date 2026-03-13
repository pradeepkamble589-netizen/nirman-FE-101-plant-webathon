// ================= SEARCH FUNCTION =================
function searchPlant(){

let input=document.getElementById("search").value.toLowerCase();
let plants=document.getElementsByClassName("plant");

for(let i=0;i<plants.length;i++){

let text=plants[i].innerText.toLowerCase();

if(text.includes(input)){
plants[i].style.display="block";
}
else{
plants[i].style.display="none";
}

}
}

// ================= DARK MODE =================
function darkMode(){
document.body.classList.toggle("dark");
}

// ================= TREE COUNTER =================
let count=0;

function addTree(){
count++;
document.getElementById("counter").innerText=count;
}

// ================= READ FULL PAGE VOICE =================
let speech;

function startVoice() {
  let text = document.body.innerText;

  speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function stopVoice() {
  window.speechSynthesis.cancel();
}

// ================= TALKING VOICE ASSISTANT =================
let recognition;

function startListening() {

  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = function(event) {
    let userMessage = event.results[0][0].transcript;
    respondToUser(userMessage);
  };
}

function stopListening() {
  if (recognition) {
    recognition.stop();
  }
}

function respondToUser(message) {

  message = message.toLowerCase();
  let reply = "";

  if (message.includes("hello")) {
    reply = "Hello! Welcome to Smart Plant Information System.";
  }
  else if (message.includes("mango")) {
    reply = "Mango is the king of fruits and very healthy.";
  }
  else if (message.includes("neem")) {
    reply = "Neem is a medicinal plant with many health benefits.";
  }
  else if (message.includes("help")) {
    reply = "You can search plants, use dark mode, and explore plant details.";
  }
  else {
    reply = "I am your plant assistant. Please ask about plants.";
  }

  speak(reply);
}

function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}