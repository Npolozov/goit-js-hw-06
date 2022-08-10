// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   //   return normalizedInput;
// }

// console.log(normalizeInput("This ISN'T SpaM"));

// function showMessage() {
//   console.log('qwqerwtr');
// }

// showMessage();

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   console.log(normalizedInput);
// }

// normalizeInput("This ISN'T SpaM");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("This ISN'T SpaM");

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   //   return message;
//   console.log(message);
// }
// getNameLength('Poly');

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;

//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   //   return message;

//   console.log(message);
// }

// getShippingCost('Jamaica');

// const cars = ['Tesla', 'BMW', 'Nissan'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2 сделать переменную total до цикла
// let total = 0;

// // 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   //   console.log(i);
//   //   // 3 каждый элемент приплюслвать к total
//   //   total += cart[i];
//   total = total + cart[i];
// }

// // for (const value of cart) {
// //   total += value;
// // }

// console.log('Total: ', total);

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = 'banana';

// console.log(lastElement);

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   //   return words;
//   console.log(words);
// }

// splitMessage('Mango hurries to the train', ' ');

// function calculateEngravingPrice(message) {
//   // Change code below this line
//   const words = message.split(' ');
//   let total = 0;
//   console.log(words);
// }

// calculateEngravingPrice('JavaScript is in my blood');

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().join('-');

//   // Change code above this line
// }

// slugify();

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   const len = newArray.slice(0, maxLength);
//   if (newArray.lenght > maxLength) {
//     return len;
//   }
//   console.log(newArray);
//   //   console.log(secondArray);
//   //   console.log(maxLength);
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
//     if (word.lenght > longestWord.lenght) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
//   // Change code above this line
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//   }

//   // Change code above this line
//   //   return numbers;
// }

// createArrayOfNumbers(29, 34);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = 0; i < array1.length; i++)
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//       console.log(i);
//     }
//   //   console.log(newArr);

//   // Change code above this line
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

function getEvenNumbers(start, end) {
  // Change code below this line
  const numbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  console.log(numbers);
  // Change code above this line
}

getEvenNumbers(3, 11);
