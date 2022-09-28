const input = document.querySelector("#validation-input");
const lengthReg = input.dataset.length;

const onInputBlur = (event) => {
  const isValid = Number(lengthReg) === event.currentTarget.value.length;
  console.log(isValid);
  if (isValid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputBlur);
