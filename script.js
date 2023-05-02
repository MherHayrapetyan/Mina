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

// Section Two

const sectionTwoTxt = document.querySelector(".sectionTwoTxt");
const sectionTwoTxtTop = document.querySelector(".sectionTwoTxtTop");
const sectionTwoBox = document.querySelector(".sectionTwoBox");
const sectionTwoBoxTop = document.querySelector(".sectionTwoBoxTop");

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionTwoTxtTop.offsetTop - 500) {
    sectionTwoTxt.style.display = "block";
    sectionTwoTxtTop.style.display = "none";
  }
});

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionTwoBoxTop.offsetTop - 500) {
    sectionTwoBox.style.display = "block";
    sectionTwoBoxTop.style.display = "none";
  }
});

// Section Three

const sectionThreeAnim = document.querySelector(".sectionThreeAnim");
const sectionThreeAnimTop = document.querySelector(".sectionThreeAnimTop");

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionThreeAnimTop.offsetTop - 500) {
    sectionThreeAnim.style.display = "block";
    sectionThreeAnimTop.style.display = "none";
  }
});
