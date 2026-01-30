// 1) შემთხვევითი ფერის შეცვლა
document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// 2) რეალურ დროში ტექსტის გამოჩენა
const input = document.getElementById("textInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

// 3) სათაურის ზომის გაზრდა
let size = 24;

document.getElementById("sizeBtn").addEventListener("click", () => {
  size += 4;
  document.getElementById("title").style.fontSize = size + "px";
});

// 4) მაუსზე გადატარება — სურათის შეცვლა
const img = document.getElementById("myImg");

img.addEventListener("mouseover", () => {
  img.src = "HTML5_logo_and_wordmark.svg.png"; 
});

img.addEventListener("mouseout", () => {
  img.src = "image1.jpg";
});

// 5) სამი ღილაკი — ფონის შეცვლა
document.getElementById("redBtn").onclick = () => {
  document.body.style.backgroundColor = "red";
};

document.getElementById("greenBtn").onclick = () => {
  document.body.style.backgroundColor = "green";
};

document.getElementById("blueBtn").onclick = () => {
  document.body.style.backgroundColor = "blue";
};
