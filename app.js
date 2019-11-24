window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sounds');
  const pads = document.querySelectorAll('.pads div');
  const visuals = document.querySelector('.visuals');
  const colors = ["lightblue", "lightsalmon", "magenta", "midnightblue", "chartreuse", "crimson"];

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    })
  })
  const createBubble = (index) => {
    const bubble = document.createElement('div');
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visuals.removeChild(this)
    })

  }
})