function generateAudio() {
  window.addEventListener('keydown', function (e) {
    const audio = this.document.querySelector(`audio[key-code="${e.keyCode}"]`);
    if (!audio) return; //stop the function.

    audio.currentTime = 0; //play audio again from start
    audio.play();
  });
}
