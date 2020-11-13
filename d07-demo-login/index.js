function myFunction() {
    var x = document.getElementsByClassName("navbar-toggler");
    if (x.class === "btn-button") {
        x.class += " responsive";
    } else {
        x.class = "btn-button";
    }
}