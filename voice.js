function voice(textToRead){
    var read=textToRead;
    var text = document.getElementById(read).textContent;
    var text = text.toString();
    var speech = new SpeechSynthesisUtterance(text)

    speechSynthesis.speak(speech);

}
