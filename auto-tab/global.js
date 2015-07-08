var area_code = document.getElementById("area_code");
var prefix = document.getElementById("prefix");
var main = document.getElementById("main");

function switch1() {
  if (area_code.value.length == 3) {
    prefix.focus();
  }
}

function switch2() {
  if (prefix.value.length == 3) {
    main.focus();
  }
}