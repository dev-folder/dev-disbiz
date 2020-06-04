/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

// Menu
var roundButton = document.querySelector("#roundButton")
var Slidenav = document.querySelector("#navbar")

roundButton.addEventListener("click", showMenu, false)
navbar.addEventListener("click", hideMenu, false)

function showMenu(e) {
    navbar.classList.add("show")
    document.body.style.overflow = "hidden"
}
function hideMenu(e) {
    navbar.classList.remove("show")
    e.stopPropagation();
    document.body.style.overflow = "auto"
}

// Go back in history link
function goBack() {
    window.history.back();
}

// form
var first = "andy";
var last = "andy.cymru";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}