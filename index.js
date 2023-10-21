const text = "Hey there!";
let index = 0;
let direction = 1;  
let delay = 150;

function typeText() {
  const typingElement = document.getElementById("type-writing");

  if (direction === 1 && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
  } else if (direction === -1 && index >= 0) {
    typingElement.textContent = text.substring(0, index);
    index--;
  } else {
    direction *= -1;
  }
  setTimeout(typeText, delay);
}

typeText();
