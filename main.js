let result = document.querySelector(".result");

let x = 500;
let y = 250;
let z = 120;

x *= 11000.34;
y *= 11000.34;
z *= 12354.03;

let alshMoney = +prompt("Alisherning pulini kiriting!");
let travelCost = x + y + z;

if (alshMoney >= travelCost) {
  console.log("Oq yo'l, Alisher!");
  result.textContent = "OQ YO''''L!";
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan!");
  result.textContent = "Pulingiz yetmas ekan!";
}
