var exit = document.getElementById("exit");
var box = document.getElementById("box");
var signIn = document.getElementById("sign_in");

signIn.onclick = show_box;

function show_box() {
  box.style.visibility = "visible";
}

exit.onclick = hide_box;

function hide_box() {
  box.style.visibility = "hidden";
}


  //committing