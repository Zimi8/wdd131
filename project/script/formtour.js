
const provinces = [
    'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 
    'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 
    'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 
    'Misiones', 'Neuquén', 'Río Negro', 'Salta', 
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 
    'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
];

// DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const provinceSelect = document.getElementById('province');
const tourSelect = document.getElementById('tourSelect');


if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


function loadProvinces() {
    if(!provinceSelect) return;
    
    provinces.forEach(prov => {
        let option = document.createElement('option');
        option.value = prov;
        option.textContent = prov;
        provinceSelect.appendChild(option);
    });
}


function prefillTour() {

    const interestedTour = localStorage.getItem('interestedTour');
    
    if (interestedTour && tourSelect) {

        const options = Array.from(tourSelect.options);
        const match = options.find(opt => opt.value.includes(interestedTour) || interestedTour.includes(opt.value));
        
        if (match) {
            tourSelect.value = match.value;
            console.log(`Auto-selected tour: ${match.value}`);
        }
    }
}


function initFooterDate() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}


document.addEventListener('DOMContentLoaded', () => {
    loadProvinces();
    prefillTour();
    initFooterDate();
});