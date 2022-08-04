// var header = document.getElementById("header");
// var headernav = document.getElementById("headernav");
// var nome = document.getElementById("nome");
// var showSidebar = false;
// var body = document.getElementById("body");

// function sidebar() {
//   showSidebar = !showSidebar;
//   if (showSidebar) {
//     headernav.style.marginLeft = "0";
//     headernav.style.animationName = "showSidebar";
//     content.style.filter = "blur(2px)";
//     nome.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";
//   } else {
//     headernav.style.marginLeft = "-110vw";
//     headernav.style.animationName = "";
//     content.style.filter = "";
//     nome.style.filter = "";
//     body.style.overflowY = "";
//   }
// }

// function closeSidebar() {
//   if (showSidebar) {
//     sidebar();
//   }
// }

// window.addEventListener("resize", function (event) {
//   if (window.innerWidth > 768 && showSidebar) {
//     sidebar();
//   }
// });

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(carousel, 4500); // Change image every 2 seconds
}

var loadMoreBtn = document.querySelector("#load-more");
var currentItem = 2;

loadMoreBtn.onclick = () => {
  var pics = [...document.querySelectorAll(".pictures")];
  var divs = [...document.querySelectorAll(".dividers")];
  for (var i = currentItem; i < currentItem + 6; i++) {
    pics[i].style.display = "flex";
    divs[i].style.display = "block";
  }
  currentItem += 6;
  if (currentItem >= pics.length) {
    loadMoreBtn.style.display = "none";
  }
};

const sidebar = document.querySelector(".sidebar");
const content = document.getElementById("content");
const nome = document.getElementById("nome");
sidebar.querySelector(".blocker").onclick = hide;

function show() {
  // swipe right
  sidebar.classList.add("visible");
  document.body.style.overflow = "hidden";
  content.style.filter = "blur(2px)";
  nome.style.filter = "blur(2px)";
}
function hide() {
  // by blocker click, swipe left, or url change
  sidebar.classList.remove("visible");
  document.body.style.overflow = "";
  content.style.filter = "";
  nome.style.filter = "";
}
function toggle() {
  sidebar.classList.contains("visible") ? hide() : show();
}
window.toggle = toggle;
