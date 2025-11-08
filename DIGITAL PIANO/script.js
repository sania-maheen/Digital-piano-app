function playSound(note) {
  let audio = new Audio("sounds/" + note + ".mp3");
  audio.volume = 0.8; // adjust volume (0.0 to 1.0)
  audio.play();
}
