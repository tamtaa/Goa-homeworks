// # 1. მოცემული გაქვთ div ელემენტი. JavaScript-ის გამოყენებით იპოვეთ მისი parent element და შეუცვალეთ background ფერი

const child = document.getElementById("child");
child.parentNode.style.backgroundColor = "purple";
// # 2. HTML-ში მოცემული გაქვთ ul ელემენტი და მასში რამდენიმე li. JavaScript-ით იპოვეთ პირველი li და შეცვალეთ მისი ტექსტი.
const li = document.querySelector("li");
li.textContent = "hello"

// # 3. მოცემული გაქვთ button ელემენტი. მისი next sibling element-ის ტექსტი შეცვალეთ DOM navigation-ის გამოყენებით
const btn = document.getElementById("btn");
btn.nextElementSibling.textContent = "hello";

// # 4. მოცემული გაქვთ ერთი ელემენტი. იპოვეთ მისი child elements და თითოეულს დაამატეთ class.
const box = document.getElementById("box");
const children = box.children;

for (let child of children) {
  child.classList.add("active");
}

// # 5. HTML-ში მოცემული გაქვთ div.card ელემენტი. JavaScript-ის გამოყენებით შექმენით მისი clone და დაამატეთ გვერდის ბოლოში.
const card = document.querySelector(".card");
const cardClone = card.cloneNode(true);
document.body.append(cardClone);

// # 6. მოცემული გაქვთ p ელემენტი. დააკლონეთ ისე, რომ text content-იც გადაკოპირდეს და ჩაამატეთ section ელემენტში
const p = document.getElementById("text");
const pClone = p.cloneNode(true);
document.getElementById("section").append(pClone);
// # 7. ღილაკზე დაჭერისას დააკლონეთ კონკრეტული ელემენტი და დაამატეთ ის იმავე parent ელემენტში.  
const btn = document.getElementById("btn");
const parent = document.getElementById("parent");
const div = document.getElementById("div");
btn.addEventListener("click", () => {
    const clone = div.cloneNode(true);
    parent.append(clone);

});

// # 8. მოცემული გაქვთ img ელემენტი. წაიკითხეთ მისი src attribute და დაბეჭდეთ console-ში
const img = document.getElementById("img");
console.log(img.getAttribute("src"));
// # 9. ღილაკზე დაჭერისას ელემენტს დაამატეთ ახალი data-id attribute.  
const btn = document.getElementById("btn");
const boox = document.getElementById("boox");
btn.addEventListener("click", () => {
    boox.setAttribute("data-id", "100");
});
// # 10. მოცემული გაქვთ a ელემენტი. შეუცვალეთ მას href attribute JavaScript-ის გამოყენებით
const link = document.getElementById("link");
link.setAttribute("href", "https://google.com");

