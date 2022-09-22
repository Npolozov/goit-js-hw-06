const itemEl = document.querySelector("#categories");
const numberOfLi = itemEl.children.length;
console.log("Number of categories:", numberOfLi);


const items = itemEl.querySelectorAll(".item ");
console.log(items);
items.forEach((item) => {
  const category = item.querySelector("h2");
  console.log("Category:", category.textContent);
  const elements = item.querySelectorAll("li");
  console.log("Elements:", elements.length);
});


