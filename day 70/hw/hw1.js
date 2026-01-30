const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = `hsl(${i * 60}, 70%, 60%)`;
}
