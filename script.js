'use strict';

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }   
}

/* navbar toggle*/
const navbar = document.querySelector("[data-navbar]");
const navtogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}
addEventOnElem(navtogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove('active');
    overlay.classList.remove('active')
}
addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 80) {
        header.classList.add('active');
    } else{
        header. classList.remove ('active')
    }
}
addEventOnElem(window, "scroll", headerActive);