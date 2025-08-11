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
