function playAudio(e) {
  const clickedKey = document.querySelector(
    `.key[data-key-code="${e.keyCode}"]`
  );

  if (clickedKey) {
    const targetSAudio = document.querySelector(
      `audio[data-key-code="${e.keyCode}"]`
    );

    clickedKey.classList.add("playing");
    targetSAudio.currentTime = 0; //rewind the audio
    targetSAudio.play();
  }
}

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

window.addEventListener("keyup", playAudio);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
