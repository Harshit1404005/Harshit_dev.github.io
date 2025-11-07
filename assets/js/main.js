const text = "Hi, I'm Harshit Gupta — Android Developer";
let idx = 0;
function type() {
  if (idx < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(idx);
    idx++;
    setTimeout(type, 60);
  }
}
window.onload = type;
document.getElementById("year").textContent = new Date().getFullYear();
