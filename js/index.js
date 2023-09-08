/* HTML ELEMENTS */

let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".overLay .fa-xmark");
let nav = document.querySelector("nav>:first-child");
let overLay = document.querySelector(".overLay");
let NavBarLinks = document.querySelectorAll('nav>div a');
const popUp = $('#popUp');
let closePopUpBtn = $('#closePopUp');
const seeProject = $('button[data-project]')
const projectsArray = [{ name: 'Multi-Post Stories 1', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 2', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 3', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 4', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 5', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 6', 'description': `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, 'img': `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' },
{ name: 'Multi-Post Stories 7', description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, img: `./images/popUpImage.jfif`, techonlogies: ['HTML', 'Bootstrap', 'Ruby on Rails'], version: '#', source: '#' }]





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

/* create the pop up section */
function createPopUp(index) {
    index = Number(index);
    let techs = ``;
    for (let tech of projectsArray[index].techonlogies) {
        techs += ` <p class="btn  rounded-0 border me-3">${tech}</p>`
    }
    let cartona = `<div class="container bg-white p-3">
    <div class="row">
        <div class="col-12 d-flex justify-content-between pb-5">
            <h2>${projectsArray[index].name}</h2>
            <div id="closePopUp">
            <i class="fa fa-xmark fs-3 text-secondary" ></i></div>
        </div>
        <div class="card-tags d-flex col-12">
           ${techs}
        </div>
        <div class="col-12 mb-2 col-lg-7">
            <img src="${projectsArray[index].img}" alt="" class="w-100 ">
        </div>
        <div class="col-12 col-lg-5 row">
            <div class="col-12">
                <p>${projectsArray[index].description}</p>
            </div>
            <div class="col-12 align-self-end d-flex justify-content-start">
                <a href="${projectsArray[index].version}" class=" btn main-color link-underline-opacity-0 rounded-0 me-3">See live <i
                        class="fa-solid fa-arrow-up-right-from-square text-white ms-1"></i></a>
                <a href="${projectsArray[index].source}" class=" btn main-color link-underline-opacity-0 rounded-0">See Source <i
                        class="fa-brands fa-github text-white ms-1"></i></a>
            </div>
            <div class="col-12 d-flex justify-content-between mt-3">
            <div id="prevPopUp" class="d-flex align-items-baseline me-3">
            <i class="fa-solid fa-arrow-left me-2"></i>
            <p>Previous Project</p>
            </div>
            <div id="nextPopUp" class="d-flex align-items-baseline ">
            <p>Next Project</p>
            <i class="fa-solid fa-arrow-right ms-2"></i>
            </div>
            </div>
        </div>
    </div>
    
    </div> `;
    return cartona
}
/* open the pop up (to show a specific project details) */

function openPopUp() {
    popUp.removeClass('d-none');
    $('body').addClass('overflow-hidden');
}
/* Display popup to show the details when the "see project button is pressed"*/
function displayPopUp(index) {
    openPopUp();
    let popUpHtml = createPopUp(index);
    popUp.html(popUpHtml);
    closePopUpBtn = $('#closePopUp');
    closePopUpBtn.click(function () {
        closePopUp()
    });
    /* Activating next/previous Projects */
    navigateProjects(index);
    if ($('#prevPopUp').length) {
        $('#prevPopUp').click(function () {
            displayPopUp(index - 1);
        })
    }
    if ($('#nextPopUp').length) {
        $('#nextPopUp').click(function () {
            displayPopUp(index + 1)
        })
    }
}
function navigateProjects(index) {
    index = Number(index);
    if (index == 0) {
        $('#prevPopUp').addClass('invisible')
    } else if (index == projectsArray.length - 1) {
        $('#nextPopUp').addClass('invisible')
    }
}
/* Close pop up when */
function closePopUp() {
    popUp.addClass('d-none');
    popUp.html('')
    $('body').removeClass('overflow-hidden')
}

/* ------------------------------------------------ */
/* Events */

openMenu.addEventListener("click", function () {
    console.log('hello'); openMenuF()
});
closeMenu.addEventListener("click", function () { closeMenuF() });
/* Closes the navBar when clicking any NavBar links to show that chosen section */
for (let NavBarLink of NavBarLinks) {
    NavBarLink.addEventListener('click', function (event) {
        closeMenuF();
    })
}

/* create bottom border for the navBar link of the currently displayed section */
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

/* Show project when clicking "See  project" */

seeProject.click(function (event) {
    const index = $(event.target).attr('data-project');
    displayPopUp(index - 1);
})

