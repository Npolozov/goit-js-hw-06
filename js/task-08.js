const form = document.querySelector(".login-form");


const formElements = event.currentTarget.elements;

const email = formElements.email.value;
const password = formElements.password.value;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (email === "" || password === "") {
    return alert("Alert");
  }

  const formData = { email, password };
  console.log(formData);

  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
//   const userDetails = { email: email.value, Password: password.value };

//   console.log(userDetails);
//   event.currentTarget.reset();
// }



