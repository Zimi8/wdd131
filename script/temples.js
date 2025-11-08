// FOOTER DYNAMIC DATES
// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date/time from the last activity 
document.getElementById("lastModified").textContent = document.lastModified;

// TOGGLE for mobile
const menuButton = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// X 
menuButton.addEventListener('click', () => {
    // 1. Toggle for the vibility of the list of the nav 
    navLinks.classList.toggle('show');

    // 2. trying to change te menu to X!!
    if (navLinks.classList.contains('show')) {
         // text content
        menuButton.textContent = '✕'; 
        menuButton.setAttribute('aria-label', 'Close Menu');
    } else {
        menuButton.textContent = '☰'; 
        menuButton.setAttribute('aria-label', 'Menu');
    }
}); 