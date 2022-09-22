const input = document.querySelector("#name-input");
const titleSpan = document.querySelector("#name-output");
// console.log(titleSpan);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  titleSpan.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    titleSpan.textContent = "Anonymous";
  }
}

input.addEventListener("input", onInputChange);
