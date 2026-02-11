const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".drop-btn");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });
});
