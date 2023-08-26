let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".overLay .fa-xmark");
let nav = document.querySelector("nav>:first-child");
let overLay = document.querySelector(".overLay");

function openMenuF() {
    nav.classList.replace("d-block", "d-none");
    overLay.classList.replace("d-none", "d-block");
}
function closeMenuF() {
    overLay.classList.replace("d-block", "d-none");
    nav.classList.replace("d-none", "d-block");
}

openMenu.addEventListener("click", function () { openMenuF() });
console.log(nav, overLay)
closeMenu.addEventListener("click", function () { closeMenuF() })
window.scroll(0, 5000)