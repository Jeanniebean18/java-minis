var tab1 = document.getElementById("tab1");
var content1 = document.getElementById("content1");

var tab2 = document.getElementById("tab2");
var content2 = document.getElementById("content2");

var tab3 = document.getElementById("tab3");
var content3 = document.getElementById("content3");

tab1.onclick = toggle_display1;

function toggle_display1() {
  
  if (content1.style.display == "block") {
    content1.style.display = "none";
  }
  else {
    content1.style.display ="block";
    content2.style.display = "none";
    content3.style.display = "none";
  }
}


tab2.onclick = toggle_display2;

function toggle_display2() {
  
  if (content2.style.display == "block") {
    content2.style.display = "none";
  }
  else {
    content2.style.display ="block";
    content1.style.display = "none";
    content3.style.display = "none";
  }
}


tab3.onclick = toggle_display3;

function toggle_display3() {
  
  if (content3.style.display == "block") {
    content3.style.display = "none";
  }
  else {
    content3.style.display ="block";
    content2.style.display = "none";
    content1.style.display = "none";
  }
}