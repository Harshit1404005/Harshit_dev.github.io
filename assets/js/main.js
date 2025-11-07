// Typing effect
const text = "Hi, I'm Harshit Gupta — Android Developer";
let idx = 0;
function type() {
  if (idx < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(idx);
    idx++;
    setTimeout(type, 60);
  }
}

// Generate floating particles
function createParticles(count = 20) {
  const container = document.getElementById('particles');
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 20 + 10;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = `-${Math.random() * 100}px`;
    p.style.animationDuration = `${5 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(p);
  }
}

window.onload = () => {
  type();
  createParticles(25);
  document.getElementById("year").textContent = new Date().getFullYear();
};
