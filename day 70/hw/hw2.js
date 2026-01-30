const title = document.getElementById("title");
const text = document.getElementById("text");

console.log(title.innerText);
console.log(text.innerHTML);

title.innerText = "innerText-ით";
text.innerHTML = "<strong>innerHTML</strong>-ის გამოყენებით!";
