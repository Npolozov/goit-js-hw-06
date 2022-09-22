const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const inrementBtn = document.querySelector('[data-action="increment"]');
console.log(inrementBtn);

const valueRef = document.querySelector("#value");
console.log(valueRef);

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

inrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
