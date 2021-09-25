/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* vue form input binding */

var btn = document.querySelectorAll("form .btn")[0];

var checkBox = document.getElementById("exampleCheck1");
btn.disabled = !checkBox.checked;

checkBox.addEventListener("change", checkTerms);

function checkTerms() {
    if (this.checked) {
        btn.disabled = true;
    } else {
        btn.disabled = true;
    }
}

/* vue form input binding end */