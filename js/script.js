const toggle = document.querySelector(".toggle");
const imgMain = document.querySelector(".img-main");
const header = document.querySelector("header");
const main = document.querySelector(".section-main");
const img1 = document.querySelector(".bg-img");
const img2 = document.querySelector(".bg-img2");
const menu = document.querySelector(".menu");

///img reposicionar
const smallScreen = window.matchMedia("(max-width: 650px)");
window.addEventListener("resize", function () {
  reposicionar();
});

///toggle
toggle.addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu();
});

function reposicionar() {
  if (smallScreen.matches) {
    header.appendChild(imgMain);
    imgMain.style.width = "100%";

    //-imgs bg
    img1.innerHTML =
      '<img src="/images/bg-pattern-intro-right-mobile.svg" alt="">';
    img1.style.top = "200px";

    img2.innerHTML =
      '<img src="/images/bg-pattern-intro-left-mobile.svg" alt="">';
    img2.style.bottom = "60%";
  } else {
    header.removeChild(imgMain);
    main.appendChild(imgMain);
    imgMain.style.width = "auto";

    //-imgs bg
    img1.innerHTML =
      '<img src="/images/bg-pattern-intro-right-desktop.svg" alt="">';
    img1.style.top = "0";

    img2.innerHTML =
      '<img src="/images/bg-pattern-intro-left-desktop.svg" alt="">';
    img2.style.bottom = "-50%";
  }
}

function toggleMenu() {
  toggle.classList.toggle("close");
  if (toggle.classList.contains("close")) {
    toggle.innerHTML = '<a href=""><i class="far fa-window-close"></i></a>';
    menu.classList.add("show-menu");
  } else {
    toggle.innerHTML =
      '<a href=""><i class="fa fa-bars" aria-hidden="true"></i></a>';
    menu.classList.remove("show-menu");
  }
}
