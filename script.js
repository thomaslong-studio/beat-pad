window.addEventListener("keydown", function (a) {
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`); //select audio that gets played
  const pad = document.querySelector(`.hit[data-key="${a.keyCode}"]`); //select the pad that gets pushed down for user feedback
  if (!audio) return;
  audio.currentTime = 0; //restart audio play
  audio.play();
  pad.classList.add("active");
  if (a.keyCode == 32) {
    pad.classList.add("wave");
    this.setTimeout(function () {
      pad.classList.remove("wave");
    }, 7000);
  }
  //remove the class
  window.addEventListener("keyup", function () {
    pad.classList.remove("active");
  });
});

function whenClicked(a) {
  console.log("been clicked");
  const audio = document.querySelector(`audio[data-key="81"]`); //select audio that gets played
  const pad = document.querySelector(`.hit[data-key="81"]`); //select the pad that gets pushed down for user feedback
  if (!audio) return;
  audio.currentTime = 0; //restart audio play
  audio.play();
  pad.classList.add("active");
  if (audio == 32) {
    pad.classList.add("wave");
    this.setTimeout(function () {
      pad.classList.remove("wave");
    }, 7000);
  }
  //remove the class
  window.addEventListener("mouseup", function () {
    pad.classList.remove("active");
  });
}
