function myFunction() {
  var x = document.getElementsByClassName("navbar-toggler");
  if (x.className === "btn-button") {
    x.className += " responsive";
  } else {
    x.className = "btn-button";
  }
}
