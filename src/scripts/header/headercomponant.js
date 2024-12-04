import image from "../../assets/team_2_logo_big.png";
import imageTwo from "../../assets/img/main-pic.jpg";
import imageThree from "../../assets/img/woman-clothes.jpg";
import imageF from "../../assets/img/man-clothes.jpg";
import imageFi from "../../assets/img/jewelry.jpg";
import imageSi from "../../assets/img/electronic.jpg";

export function header() {
  const header = document.getElementById("header");

  header.innerHTML = `
<header >
<div id="menu-header">
  <div id="topButtons">
    <button id="menu-btn" class="span-color">MENU</button>
    <button id="close-btn" class="span-color">CLOSE</button>
    <img id="logo-big" class="span-color" src="${image}"></img>
    <button id="cart-btn" class="span-color">CART</button>
  </div>
</div>
<div id="topMenu">
  <ul id="topMenuUl">
    <li>
      <a id="shop-all-btn" class="shopBtn" data-bg="${imageTwo}" href="#">
        <div class="span-color">
          <span>SHOP</span>&nbsp<span>ALL</span>
        </div>
      </a>
    </li>
    <li>
      <a id="woman-clothes-btn" class="shopBtn" data-bg="${imageThree}" href="#">
        <div class="span-color">
          <span>WOMEN'S</span>&nbsp<span>CLOTHES</span>
        </div>
      </a>
    </li>
    <li>
      <a id="man-clothes" class="shopBtn" data-bg="${imageF}" href="#">
        <div class="span-color">
          <span>MEN'S</span>&nbsp<span>CLOTHES</span>
        </div>
      </a>
    </li>
    <li><a id="jeweley-btn" class="shopBtn " data-bg="${imageFi}" href="#">
        <div class="span-color">JEWELRY</div>
      </a></li>
    <li><a id="electronices-btn" class="shopBtn " data-bg="${imageSi}" href="#">
        <div class="span-color">ELECTRONICS</div>
      </a></li>
  </ul>
</div>
</header>`;
  const buttonContainer = document.querySelector("body");
  document.getElementById("close-btn").onclick = function () {
    document.getElementById("menu-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("menu-header").style.backgroundColor = "#f3f1e0";
    document.getElementById("topMenu").style.display = "none";

    buttonContainer.style.backgroundImage = "none";
  };
  document.getElementById("menu-btn").onclick = function () {
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("topMenu").style.display = "flex";

    document.getElementById("topMenuUl").style.display = "flex";
    document.getElementById("menu-header").style.backgroundColor =
      "transparent";
    document.getElementById("topMenu").style.display = "flex";
  };

  const shopBtns = document.querySelectorAll(".shopBtn");

  const buttonSpanColors = document.querySelectorAll(".span-color");

  document.addEventListener("DOMContentLoaded", () => {
    const shopBtns = document.querySelectorAll(".shopBtn");
    shopBtns.forEach((button) => {
      const img = new Image();
      img.src = button.getAttribute("data-bg");
    });

    shopBtns.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        const bgImage = button.getAttribute("data-bg");
        buttonContainer.style.backgroundImage = `url('${bgImage}')`;
        document.getElementById("topButtons").style.backgroundColor =
          "transparent";
      });
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
}