// paragraph constant
const para = document.querySelector(".para p");
// convert font to bold
const fbold = document.querySelector(".fbold");
fbold.addEventListener("click", function () {
  para.classList.toggle("bold");
});

// select fonts
const select = document.querySelector("#fonts");
select.onchange = function () {
  para.style.fontFamily = select.value;
};

// font size
const total = document.querySelector("#total");
function dec() {
  document.querySelector("#total").value = total.value - 1;
  if (total.value <= 0) {
    total.value = 1;
  }
  para.style.fontSize = total.value + "px";
}
function inc() {
  document.querySelector("#total").value = parseInt(total.value) + 1;
  para.style.fontSize = total.value + "px";
}

// invert colors
const invert = document.querySelector(".invert");
invert.onclick = function () {
  document.querySelector(".para").classList.toggle("changeColors");
};
