import image from "../../assets/team_2_logo_big.png";
import imageTwo from "../../assets/img/main-pic.jpg";
import imageThree from "../../assets/img/woman-clothes.jpg";
import imageF from "../../assets/img/man-clothes.jpg";
import imageFi from "../../assets/img/jewelry.jpg";
import imageSi from "../../assets/img/electronic.jpg";


export function header() {

    const header = document.getElementById("header");

    header.innerHTML = `
<header>
<div class="topButtons">
  <button id="close-btn" class="span-color">CLOSE</button>
  <img id="logo-big" class="span-color" src="${image}"></img>
  <button id="cart-btn" class="span-color">CART</button>
</div>
<div class="topMenu">
  <ul>
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


}