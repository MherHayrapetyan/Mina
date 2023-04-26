// Header

const navShop = document.querySelector(".navigationOneShopBigBox");
const burgHov = document.querySelector(".burgLogoBoxHover");
const burg = document.querySelector(".burgLogoBox");

function navShopOp() {
  navShop.style.transform = "translateX(0)";
}

function navShopCl() {
  navShop.style.transform = "translateX(100%)";
}

function burgHovTog() {
  burgHov.classList.toggle("heigth");
}

function burgTog() {
  burg.classList.toggle("heigth");
}
