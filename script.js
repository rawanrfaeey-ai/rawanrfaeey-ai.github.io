document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("loading-text");
  const cat = document.getElementById("cat");
  const lickSound = document.getElementById("lick-sound");
  const mainContent = document.getElementById("main-content");
  const loadingScreen = document.getElementById("loading-screen");

  let text = textElement.textContent;
  let index = 0;

  lickSound.play();

  // Remove letters one by one to simulate "licking"
  let interval = setInterval(() => {
    if (index < text.length) {
      textElement.textContent = text.substring(index + 1);
      index++;
    } else {
      clearInterval(interval);
      // Fade out loading screen after a tiny delay
      loadingScreen.style.transition = "opacity 1s ease";
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
      }, 1000);
    }
  }, 300); // speed of licking (ms per letter)
});

// Typing effect for tagline
const text = "Bold mind. Big dreams. No limits.";
let i = 0;
const speed = 100; // typing speed in ms
const tagline = document.querySelector(".tagline");

function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Smooth scroll to story section
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
});
