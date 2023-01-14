// variables declarations 

btnNav = document.querySelector('.navigation__button');
navBackground = document.querySelector('.navigation__background');
navContainer = document.querySelector('.navigation__nav');
const [navToggOne, navToggTwo, navToggThree] = document.querySelectorAll('.navigation__toggler');
const navLinks = document.querySelector('.navigation__list');
const copyrightYear = document.querySelector('.copyright-year');

// some state variables 
let navToggled = false;


// Navigation pop up 

// Assigning Togglers positions
const toggsPosition = (toggOne, toggThree) => {
    navToggOne.style.top = `${toggOne}%`;
    navToggThree.style.top = `${toggThree}%`;
}

const toggleNav = () => {
    navBackground.classList.toggle('bg-scale');
    navContainer.classList.toggle('nav-opacity');
    navToggOne.classList.toggle('btn-rotate-pos');
    navToggTwo.classList.toggle('btn-display');
    navToggThree.classList.toggle('btn-rotate-neg');
}

btnNav.addEventListener('click', function (e) {
    toggleNav();
    navToggled = navContainer.classList.contains('nav-opacity') ? true : false;
    // Restoring toggler positions that is degraded due to hover
    toggsPosition(35, 65);
});

btnNav.addEventListener('mouseover', function (e) {
    if (navToggled) return;
    toggsPosition(32, 68);

});

btnNav.addEventListener('mouseout', function (e) {
    if (navToggled) return;
    toggsPosition(35, 65);
});


// Smooth scrolling to the sections

navLinks.addEventListener('click', function (e) {
    e.preventDefault();

    const eventPropagator = e.target;

    if (!eventPropagator.classList.contains('navigation__link')) return;

    const navigateTo = eventPropagator.getAttribute('href');

    // if no #links then do nothing
    if (navigateTo === '#') return;

    toggleNav();

    navToggled = navContainer.classList.contains('nav-opacity') ? true : false;
    // Restoring toggler positions that is degraded due to hover
    toggsPosition(35, 65);


    const navigationSection = document.querySelector(navigateTo);
    navigationSection.scrollIntoView({ behavior: 'smooth' });

});


// putting footer's copyright year dynamically
const year = new Date();

copyrightYear.textContent = year.getFullYear();

// // Variables
// const navLinks = document.querySelector('.navigation__list');
// const navLinksSiblings = document.querySelectorAll('.navigation__link');

// const header = document.querySelector('.header');
// const navHeight = getComputedStyle(header).height;
// const sectionHome = document.querySelector('#home');
// const sectionAbout = document.querySelector('#about');

// // Buttons smooth scrolling


// // Navigation and smooth scrolling
// navLinks.addEventListener('click', function (e) {
//     e.preventDefault();

//     const eventPropagator = e.target;

//     if (eventPropagator !== this) {
//         const navigateTo = eventPropagator.getAttribute('href');

//         // if no #links then do nothing
//         if (navigateTo === '#') return;

//         // For showing the active links
//         navLinksSiblings.forEach(navLinkSibling => {
//             if (eventPropagator === navLinkSibling) {
//                 eventPropagator.style.color = '#cf711f';
//             }

//             if (eventPropagator !== navLinkSibling) {
//                 navLinkSibling.style.color = '#333';
//             }

//         })
//         const navigationSection = document.querySelector(navigateTo);
//         navigationSection.scrollIntoView({ behavior: 'smooth' });
//     }
// });


// // Making navigation fixed after a section

// const headerObserver = new IntersectionObserver(function (entries) {
//     const [entry] = entries;

//     if (!entry.isIntersecting) {
//         header.classList.add('header__sticky');
//     }

//     if (entry.isIntersecting) {
//         header.classList.remove('header__sticky');
//     }

// }, {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${navHeight}`
// });

// headerObserver.observe(sectionHome);

// // console.log(navHeight);

// // header__sticky