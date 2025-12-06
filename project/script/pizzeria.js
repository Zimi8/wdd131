// DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const btnStory = document.getElementById('btn-story');

// Hamburg
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


if (btnStory) {
    btnStory.addEventListener('click', () => {
        // Save intent to LocalStorage (Rubric requirement: using LS)
        localStorage.setItem('userIntent', 'shareStory');
        
        console.log("User wants to share a story. Redirecting...");
        
        // Redirect to form page (assuming form.html is the destination)
        window.location.href = 'formexperience.html';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lastTour = localStorage.getItem('interestedTour');
    const subtitle = document.querySelector('.pizzeria-subtitle');
    
    if (lastTour && subtitle) {
    
        console.log(`User previously interested in: ${lastTour}`);

    }
});