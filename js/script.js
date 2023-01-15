// variables declarations 

btnNav = document.querySelector('.navigation__button');
navBackground = document.querySelector('.navigation__background');
navContainer = document.querySelector('.navigation__nav');
const [navToggOne, navToggTwo, navToggThree] = document.querySelectorAll('.navigation__toggler');
const navLinks = document.querySelector('.navigation__list');
const copyrightYear = document.querySelector('.copyright-year');


const btnAllProducts = document.querySelector('.btn-all-products');
const btnBackToHome = document.querySelector('.back-to-home');
const sectionHeader = document.querySelector('.header');
const sectionMain = document.querySelector('main');
const sectionAllProducts = document.querySelector('.section-all-products');


// some state variables 
let navToggled = false;
let allProductsToggled = false;


// See all products button functionality

// toggle all products function 
const toggleAllProducts = () => {
    sectionHeader.classList.toggle('u-none-display');
    sectionMain.classList.toggle('u-none-display');
}

btnAllProducts.addEventListener('click', function (e) {
    e.preventDefault();
    toggleAllProducts();
    sectionAllProducts.classList.remove('u-none-display');
    allProductsToggled = true;
    window.scrollTo(sectionAllProducts, { behavior: 'smooth' });
});

// Go back to home button 
btnBackToHome.addEventListener('click', function (e) {
    e.preventDefault();
    toggleAllProducts();
    sectionAllProducts.classList.add('u-none-display');
    allProductsToggled = false;
    window.scrollTo(sectionHeader, { behavior: 'smooth' });
});

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

    if (allProductsToggled) {
        toggleAllProducts();
        sectionAllProducts.classList.add('u-none-display');
        allProductsToggled = false;
    }

    navigationSection.scrollIntoView({ behavior: 'smooth' });

});


// putting footer's copyright year dynamically
const year = new Date();

copyrightYear.textContent = year.getFullYear();


// Tabbed components of all products

const allProducts = document.querySelector('.all-products');
const allProductsContainer = document.querySelector('.all-products__tab-container');
const allProductsContents = document.querySelectorAll('.all-products__content');


allProductsContainer.addEventListener('click', function (e) {

    if (e.target !== e.currentTarget) {
        const propagator = e.target.closest('.all-products__tab');
        const propagatorSiblings = [...propagator.parentElement.children];

        if (!propagator.classList.contains('all-products__tab--active')) {
            propagator.classList.add('all-products__tab--active');

            propagatorSiblings.forEach(propagatorSibling => {
                if (propagator !== propagatorSibling) {
                    propagatorSibling.classList.remove('all-products__tab--active');
                }
            });
        }

        const allProductsContentToShow = document.querySelector(`.all-products__content--${propagator.dataset.tab}`);

        allProductsContents.forEach(allProductContent => {
            if (allProductContent !== allProductsContentToShow) {
                allProductContent.classList.remove('all-products__content--active');
            }
        });
        allProductsContentToShow.classList.add('all-products__content--active');

        // console.log(propagator);
    }


});
