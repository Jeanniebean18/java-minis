var tab1 = document.getElementById("tab1");
var content1 = document.getElementById("content1");

var tab2 = document.getElementById("tab2");
var content2 = document.getElementById("content2");

var tab3 = document.getElementById("tab3");
var content3 = document.getElementById("content3");

tab1.onclick = toggle_visibility1;

function toggle_visibility1() {
  
  if (content1.style.visibility == "visible") {
    content1.style.visibility = "hidden";
  }
  else {
    content1.style.visibility ="visible";
  }
}


tab2.onclick = toggle_visibility2;

function toggle_visibility2() {
  
  if (content2.style.visibility == "visible") {
    content2.style.visibility = "hidden";
  }
  else {
    content2.style.visibility ="visible";
  }
}


tab3.onclick = toggle_visibility3;

function toggle_visibility3() {
  
  if (content3.style.visibility == "visible") {
    content3.style.visibility = "hidden";
  }
  else {
    content3.style.visibility ="visible";
  }
}




