var hamburgerMenu = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile_menu");

hamburgerMenu.onclick = toggle_visibility;

function toggle_visibility() {
 
  if (mobileMenu.style.visibility == "visible") {
    mobileMenu.style.visibility = "hidden";
  } 
  else {  mobileMenu.style.visibility ="visible";
}
}
