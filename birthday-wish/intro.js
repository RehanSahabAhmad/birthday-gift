const text = "Loading something special for you ❤️";
const speed = 70;
const element = document.getElementById("typewriter");

let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// Redirect after animation
setTimeout(() => {
  window.location.href = "pages/valentine.html";
}, 6500);
