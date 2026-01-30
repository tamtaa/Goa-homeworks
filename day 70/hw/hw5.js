const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = `hsl(${i * 70}, 70%, 70%)`;
  items[i].style.color = "white";
  items[i].style.fontWeight = "bold";
}
