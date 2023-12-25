function generateAudio() {
  window.addEventListener('keydown', function (e) {
    handleAudio(e.keyCode);
  });

  // Adding click event to each SVG element
  const svgs = document.querySelectorAll('svg');
  svgs.forEach(svg => {
    svg.addEventListener('click', function () {
      // Extract key code from the clicked SVG
      const keyCode = parseInt(this.getAttribute('key-code'));
      handleAudio(keyCode);
    });
  });

  function handleAudio(keyCode) {
    const audio = document.querySelector(`audio[key-code="${keyCode}"]`);
    if (!audio) return; // stop the function.

    audio.currentTime = 0; // play audio again from start
    audio.play();

    const svg = document.querySelector(`svg[key-code="${keyCode}"]`);

    if (svg) {
      svg.style.width = '92';
      setTimeout(() => {
        svg.style.width = '100';
      }, 100);
    }
  }
}
