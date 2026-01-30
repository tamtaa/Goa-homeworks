 const tteexxtt = document.getElementById("tteexxtt");
    const text = document.getElementById("text");

    tteexxtt.addEventListener("click", () => {
      setTimeout(() => {
        text.textContent = "hello world";
      }, 2000);
    });

    // 1.
    const boxes = document.querySelectorAll(".box");
    let index = 0;

    const interval = setInterval(() => {
      if (index < boxes.length) {
        boxes[index].classList.add("visible");
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // 3.
    const input = document.getElementById("inputText");
    const sendBtn = document.getElementById("sendBtn");
    const result = document.getElementById("result");

    sendBtn.addEventListener("click", () => {
      const value = input.value;

      setTimeout(() => {
        result.textContent = value;
      }, 3000);
    });

    /* ---------- TASK 4 ---------- */
    const banner = document.getElementById("banner");
    const closeBanner = document.getElementById("closeBanner");

    const bannerTimeout = setTimeout(() => {
      banner.classList.add("hidden");
    }, 5000);

    closeBanner.addEventListener("click", () => {
      banner.classList.add("hidden");
      clearTimeout(bannerTimeout);
    });




setInterval(

)