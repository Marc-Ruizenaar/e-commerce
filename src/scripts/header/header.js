document.getElementById("close-btn").onclick = function () {
  window.location.href = "https://www.example.com";
};
document.getElementById("cart-btn").onclick = function () {
  window.location.href = "https://www.example.com";
};

const shopBtns = document.querySelectorAll(".shopBtn");
const buttonContainer = document.querySelector("body");
const buttonSpanColors = document.querySelectorAll(".span-color");

document.addEventListener("DOMContentLoaded", () => {
  const shopBtns = document.querySelectorAll(".shopBtn");
  shopBtns.forEach((button) => {
    const img = new Image();
    img.src = button.getAttribute("data-bg");
  });
});

shopBtns.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const bgImage = button.getAttribute("data-bg");
    buttonContainer.style.backgroundImage = `url('${bgImage}')`;
  });
});

buttonSpanColors.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("transparent");
    btn.classList.add("active");

    buttonSpanColors.forEach((btnOther) => {
      if (btnOther !== btn) {
        btnOther.classList.add("transparent");
      }
    });
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("active");
  });
});
