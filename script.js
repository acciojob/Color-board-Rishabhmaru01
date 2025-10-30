const container = document.getElementById("container");
const BOX_COUNT = 800;

for (let i = 0; i < BOX_COUNT; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = "rgb(29, 29, 29)";
  }, 1000);
}

function getRandomColor() {
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  return colors[Math.floor(Math.random() * colors.length)];
}
