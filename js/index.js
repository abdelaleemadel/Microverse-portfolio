/* HTML ELEMENTS */

let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".overLay .fa-xmark");
let nav = document.querySelector("nav>:first-child");
let overLay = document.querySelector(".overLay");
let NavBarLinks = document.querySelectorAll('nav>div a');





/* Functions */


/* Open the NavBar mobile in the mobile version */
function openMenuF() {
    nav.classList.replace("d-block", "d-none");
    overLay.classList.replace("d-none", "d-block");
}
/* Close the NavBar in the mobile version */
function closeMenuF() {
    overLay.classList.replace("d-block", "d-none");
    nav.classList.replace("d-none", "d-block");
}





/* ------------------------------------------------ */
/* Events */

openMenu.addEventListener("click", function () { openMenuF() });
closeMenu.addEventListener("click", function () { closeMenuF() });
/* Closes the navBar when clicking any NavBar links to show that chosen section */
for (let NavBarLink of NavBarLinks) {
    NavBarLink.addEventListener('click', function (event) {
        closeMenuF();
    })
}

/* Trials  */
console.log(window.top);
window.addEventListener('scroll', function () {
    let currentPosition = window.scrollY;
    let aboutOffset = document.querySelector('#about').offsetTop;
    let contactOffset = document.querySelector('#form').offsetTop;
    let prevLink = document.querySelector('a.border-bottom.border-white.pb-2');
    if (currentPosition < aboutOffset - 200) {
        if (prevLink) {
            prevLink.classList.remove('border-bottom', 'border-white', 'pb-2')
        } NavBarLinks[0].classList.add('border-bottom', 'border-white', 'pb-2')
    } else if (currentPosition > aboutOffset - 200 && currentPosition < contactOffset - 200) {
        if (prevLink) {
            prevLink.classList.remove('border-bottom', 'border-white', 'pb-2')
        } NavBarLinks[1].classList.add('border-bottom', 'border-white', 'pb-2');
    } else if (currentPosition > contactOffset - 200) {
        if (prevLink) {
            prevLink.classList.remove('border-bottom', 'border-white', 'pb-2')
        } NavBarLinks[2].classList.add('border-bottom', 'border-white', 'pb-2');
    }
})
function highlightSectionName() {
    let porfolio
}