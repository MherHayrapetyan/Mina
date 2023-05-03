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

// Section Four

const sectionFourImg = document.querySelectorAll(".sectionFourBoxImg");
const sectionFourImgTop = document.querySelector(".sectionFourBoxImgTop");
const sectionFourTxt = document.querySelectorAll(".sectionFourBoxTxt");
const sectionFourTxtTop = document.querySelector(".sectionFourBoxTxtTop");

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionFourImgTop.offsetTop - 550) {
    sectionFourImg.forEach(item=> item.style.display = "block")
    sectionFourImgTop.style.display = "none";
  }
});

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionFourTxtTop.offsetTop - 570) {
    sectionFourTxt.forEach(item=> item.style.display = "block")
    sectionFourTxtTop.style.display = "none";
  }
});

// Section Three

const sectionFiveAnim = document.querySelector(".sectionFiveAnim");
const sectionFiveAnimTop = document.querySelector(".sectionFiveAnimTop");
const emailInput = document.querySelector("#emailInput")
const emailBtt = document.querySelector("#emailBtt")
const sectionFiveNone = document.querySelectorAll(".secionFiveNone")
const secionFiveBlock = document.querySelector(".secionFiveBlock")

addEventListener("scroll", () => {
  if (window.pageYOffset > sectionFiveAnimTop.offsetTop - 500) {
    sectionFiveAnim.style.display = "block";
    sectionFiveAnimTop.style.display = "none";
  }
});

emailBtt.onclick = ()=> {
  if(emailInput.value.search(/@./) !== -1) {
    sectionFiveNone.forEach(item=> item.style.display = "none")
    secionFiveBlock.style.display = "block"
  }
}

