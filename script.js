// Navigation & Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Back to Top Button Logic
const mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Automatically update the year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const currentYear = new Date().getFullYear();
        footerBottom.innerHTML = `&copy; ${currentYear} Happy Kindergarten. All Rights Reserved.`;
    }
});
