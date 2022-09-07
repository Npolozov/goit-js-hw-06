function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButtonColor = document.querySelector(".change-color");
console.log(changeButtonColor);
const body = document.querySelector("body");
console.log(body);
const span = document.querySelector(".color");
console.log(span);

changeButtonColor.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});
