/* --- DATA --- */
const sliderImages = [
    { src: "images/fuga.jpg", alt: "Pizza slicing in slow motion" },
    { src: "images/banchero.jpg", alt: "Group of friends eating pizza" },
    { src: "images/cuartetas.jpg", alt: "Night view of Obelisco" }
];

const toursData = [
    {
        id: 101,
        title: "Tour Avenida Corrientes:",
        description: "Guerrin - Las Cuartetas + Tour guide with Teatro Lola Membrives, and Teatro Metropolitan.",
        image: "images/guerrin.jpg", 
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38999668505236!3d-34.60373446500632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar"
    },
    {
        id: 102,
        title: "Tour Plaza Libertad:",
        description: "El Cuartito - Babieca + Tour guide in Teatro Colon area.",
        image: "images/guitarrita.jpg",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.330950346043!2d-58.3838491850522!3d-34.59837946566275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386129711679!2sTeatro%20Col%C3%B3n!5e0!3m2!1sen!2sar"
    },
    {
        id: 103,
        title: "Tour Av Cordoba:",
        description: "\"Pizza Canchera\" (Means:the coolest pizza) - Las Cuartetas + Tour guide in Palermo city.",
        image: "images/mezzeta.jpg",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.399885448375!2d-58.43127598505387!3d-34.58883656328906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58823f6631b%3A0x63332463b2fc97!2sPlaza%20Serrano!5e0!3m2!1sen!2sar"
    }
];

/* --- DOM ELEMENTS --- */
const sliderWrapper = document.getElementById('hero-slider');
const toursContainer = document.getElementById('tours-container');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

/* --- LOGIC: SLIDER --- */
let currentSlide = 0;
let slideInterval;

function initSlider() {
    // Generate Images
    sliderImages.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.classList.add('slide-img');
        img.loading = "lazy"; 
        sliderWrapper.appendChild(img);
    });

    // Auto Play
    startSlider();

    // Controls
    btnNext.addEventListener('click', () => { nextSlide(); resetTimer(); });
    btnPrev.addEventListener('click', () => { prevSlide(); resetTimer(); });
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4000); 
}

function resetTimer() {
    clearInterval(slideInterval);
    startSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    updateSliderPosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    updateSliderPosition();
}

function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function renderTours() {
    toursData.forEach(tour => {
        
        const rowHTML = `
            <article class="tour-row">
                <!-- Left: Map -->
                <div class="tour-map-wrapper">
                    <iframe src="${tour.mapUrl}" allowfullscreen="" loading="lazy"></iframe>
                </div>

                <!-- Center: Text & Button -->
                <div class="tour-content">
                    <h3 class="tour-title">${tour.title}</h3>
                    <p class="tour-desc">${tour.description}</p>
                    
                    <a href="formTour.html" class="btn-reserve" onclick="savePreference('${tour.title}')">
                        RESERVE
                    </a>
                </div>

                <!-- Right: Image -->
                <div class="tour-img-wrapper">
                    <img src="${tour.image}" alt="${tour.title}" loading="lazy">
                </div>
            </article>
        `;
        
        toursContainer.innerHTML += rowHTML;
    });
}


window.savePreference = function(tourTitle) {
    localStorage.setItem('interestedTour', tourTitle);
    console.log(`Saved: ${tourTitle}`);
};


document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderTours();


    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

        });
    }
});