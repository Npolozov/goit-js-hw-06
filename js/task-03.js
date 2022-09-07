const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");
// console.log(listRef);

const makeGalerryEL = images.map(({ url, alt }) => {
  return `<li class = "gallery-item"><img src = "${url}"alt = "${alt}" width = "150"height = "200"/> </li>`;
});

const makeGallerryList = makeGalerryEL.join(" ");
// console.log(makeGallerryList);

listRef.insertAdjacentHTML("beforeend", makeGallerryList);

// const listItem = images.map(({ url, alt }) => {
//   const itemRef = document.createElement("li");
//   const imgRef = document.createElement("img");
//   imgRef.src = url;
//   imgRef.alt = alt;
//   imgRef.width = "100";
//   imgRef.height = "100";
//   itemRef.appendChild(imgRef);
//   return itemRef;
// });

// listRef.append(...listItem);
// console.log(listRef);
