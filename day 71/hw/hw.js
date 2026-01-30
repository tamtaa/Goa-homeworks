// 1) კომენტარების სახით ახსენი რა არის DOM
// DOM (Document Object Model) არის HTML დოკუმენტის ობიექტური მოდელი,
// რომელიც ბრაუზერს აძლევს საშუალებას იმუშაოს HTML ელემენტებზე
// JavaScript-ის მეშვეობით (შეცვალოს ტექსტი, სტილი, ელემენტები და ა.შ.)

// 2) ჩამოთვალე ყველა ის DOM-ის მეთოდი რაც გაკვეთილზე ვისწავლეთ
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
// innerText
// innerHTML
// style.propertyName



// 3) განვიხილოთ ყველა მეთოდი და ავხსნათ კომენტარებში:

// document.getElementById('idName')  აბრუნებს ელემენტს მისი id-ით.

// document.getElementsByClassName('className')  აბრუნებს ელემენტების სიას მითითებული class-ით.

// document.getElementsByTagName('tagName')  აბრუნებს ელემენტების სიას მითითებული თეგით.

// document.querySelector('selector')  აბრუნებს პირველ ელემენტს, რომელიც შეესაბამება CSS სელექტორს.

// document.querySelectorAll('selector')  აბრუნებს ყველა ელემენტს, რომელიც შეესაბამება CSS სელექტორს.

// innerText  იყენება ტექსტის წასაკითხად ან შესაცვლელად ელემენტში.

// innerHTML  იგივეა, მაგრამ მუშაობს HTML სტრუქტურაზეც (მაგ. <b>ტექსტი</b>).

// style.propertyName  საშუალებას გვაძლევს შევცვალოთ სტილი (მაგ. element.style.color = "red").



// 4) წამოიღე id-ით პარაგრაფი და შეუცვალე ტექსტი
const textP = document.getElementById("textParagraph");
textP.innerText = "hello world";


// 5) წამოიღე class-ით პარაგრაფი და შეუცვალე სტილი
const styledP = document.getElementsByClassName("styledParagraph")[0];
styledP.style.color = "blue";
styledP.style.fontSize = "20px";
styledP.style.fontWeight = "bold";


// 6) წამოიღე h1 თეგი querySelector()-ით
const title = document.querySelector("h1");
title.style.color = "purple";
title.innerText = "hello world";


// 7) წამოიღე 5 პარაგრაფი ერთი და იმავე კლასით და გასტილე JS-ით
const manyParagraphs = document.getElementsByClassName("many");
for (let i = 0; i < manyParagraphs.length; i++) {
  manyParagraphs[i].style.color = "green";
  manyParagraphs[i].style.fontSize = "18px";
  manyParagraphs[i].style.backgroundColor = "lightyellow";
}
