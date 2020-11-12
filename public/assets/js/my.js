/*console.log("Я скрипт!");

function handler1() {
    let elmenu = document.querySelector("#mc-horizontal-menu-collapse1");
    elmenu.classList.remove("show");
}

let elements = document.querySelectorAll(".subgroub");

elements.forEach(function(elm) {
    elm.addEventListener("click", handler1);
});*/
$(document).ready(function() {
    console.log("ready!");

    function handler1() {
        $("#mc-horizontal-menu-collapse1").removeClass("show");
    }
    $(".subgroub").click(handler1)
});