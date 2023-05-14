var htmlCard = document.getElementById("first-card");
var cssCard = document.getElementById("second-card");
var jsCard = document.getElementById("third-card");
var bootCard = document.getElementById("fourth-card");

var display = 0;

function first() {
  if (display == 1) {
    htmlCard.style.display = "block";
    display = 0;
  } else {
    htmlCard.style.display = "none";
    display = 1;
  }
}
function second() {
  if (display == 1) {
    cssCard.style.display = "block";
    display = 0;
  } else {
    cssCard.style.display = "none";
    display = 1;
  }
}
function third() {
  if (display == 1) {
    jsCard.style.display = "block";
    display = 0;
  } else {
    jsCard.style.display = "none";
    display = 1;
  }
}
function fourth() {
  if (display == 1) {
    bootCard.style.display = "block";
    display = 0;
  } else {
    bootCard.style.display = "none";
    display = 1;
  }
}
