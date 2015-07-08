var logo = document.getElementById("logo");
var container = document.getElementById("container");
var header = document.getElementById("header");

window.onscroll = shrink_header;

function shrink_header() {
  if (window.pageYOffset>400) {
  header.style.height = "50px";
  header.innerHTML = "<img src ='./bird.png'>"
  
}
}




