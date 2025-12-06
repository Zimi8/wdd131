
const BOOKING_COUNT_KEY = 'pizzaBookingCount';


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');


function incrementAndDisplayCount() {

    let currentCount = localStorage.getItem(BOOKING_COUNT_KEY);
    currentCount = currentCount ? parseInt(currentCount) : 0; 
    /*++ */
    currentCount++;

    localStorage.setItem(BOOKING_COUNT_KEY, currentCount.toString());
    

    const countElement = document.getElementById('suggestionCount');
    if (countElement) {
        countElement.textContent = currentCount;
    }
}


if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


function initFooterDate() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}


window.onload = function() {
    incrementAndDisplayCount();
    initFooterDate();
};