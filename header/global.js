var logo = document.getElementById("logo");
var container = document.getElementById("container");
var header = document.getElementById("header");

window.onscroll = shrink_header;

function shrink_header() {
  if (window.pageYOffset>400) {
  header.style.height = "50px";
  header.innerHTML = "<img src ='./bird.png'>"
}
  if (window.pageYOffset<400) {
  header.style.height = "125px";
  header.innerHTML = "<img src='http://omahacodeschool.com/assets/ocs_star-42ca61cf76017d43251c3dadcb2cba49.png'>"
}
  


}




