//Arrays - []

let productList = ["Cola", "Sprite", "Tomato", "Onion", "Meat"];
console.log(productList.length);
console.log(productList[0]);
console.log(productList[3]);
console.log(productList[productList.length - 1]); // получаем последний индекс массива "Meat"

productList[3] = "Orange";
console.log(productList);

// метод push добавляет элемент в массив
productList.push("Milk", "Icecream");
console.log(productList);
console.log(productList.length);

//метод pop удаляет элемент из конца массива
console.log(productList.pop());
console.log(productList);
console.log(productList.length);

//shift/unsift - удаляет /добавляет элементы из начала массива
console.log(productList.shift());
console.log(productList);
console.log(productList.unshift("Sprite", "Cola - Zero"));
console.log(productList);

//reverse -"переворачивает" массив
console.log(productList.reverse().pop());
console.log(productList);

console.log(productList.reverse());
console.log(productList);

//matrix
const lemonadeVendor = [
  ["Cola", "Cola Zero", "Cola-Vanilla"],
  ["Sprite", "Sprite-Ice", "Sprite-Cucumber"],
  ["Fanta", "Fanta-Ice", "Fanta-Grape"],
];

console.log(lemonadeVendor[1][1]);
lemonadeVendor[2][2] = "Jellen";
console.log(lemonadeVendor);
