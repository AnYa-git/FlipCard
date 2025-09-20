let flipSound = document.getElementById("flip-sound");
let flipCard = document.querySelector(".flip-card");

flipCard.addEventListener("mouseenter", () => {
  flipSound.currentTime = 0;
  flipSound.play();
});
