const typingText = ["Aspiring Software Engineer", "Python Developer", "Web Development Enthusiast", "DSA Explorer"];
let index = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 60;
let delayBetween = 2000;
const typedTextSpan = document.getElementById("typing");

function type() {
  if (charIndex < typingText[index].length) {
    typedTextSpan.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index++;
    if (index >= typingText.length) index = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetween);
});
