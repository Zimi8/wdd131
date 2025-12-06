
const historyImages = [
    {
        id: 1,
        src: "images/oldpizzeryshop.jpg",
        caption: "Old times in Avenida Corrientes, waiting for a slice.",
        alt: "Vintage photo of people queuing outside a pizzeria"
    },
    {
        id: 2,
        src: "images/oldCuarteta.jpg",
        caption: "Cheering at la cuarteta",
        alt: "crowd of people inside a pizza shop, old picture"
    },
    {
        id: 3,
        src: "images/oldservingpizza.jpg",
        caption: "Serving pizza, Slice by slice",
        alt: "Black and white photo a man givin a slice of pizza, people on the background, a blind person waiting for his slice of pizza"
    },
    {
        id: 4,
        src: "images/italians.jpg",
        caption: "Family sunday lunch tradition.",
        alt: "Italian immigrant family waiting on the line together at the first day on this pizza shop"
    }
];

// DOM   
const mainImg = document.getElementById('history-main-img');
const captionText = document.getElementById('history-caption');
const thumbsContainer = document.getElementById('history-thumbnails');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

//galler
function initHistoryGallery() {
    historyImages.forEach((item, index) => {
        const img = document.createElement('img');
    
        img.src = `${item.src}`;
        img.alt = item.alt;
        img.classList.add('hist-thumb');
        img.loading = "lazy"; // Rubric compliance
        
    
        img.addEventListener('click', () => {
            updateMainImage(item);
            highlightThumb(img);
        });

        thumbsContainer.appendChild(img);
    });
}

function updateMainImage(item) {

    mainImg.style.opacity = 0;
    setTimeout(() => {
        mainImg.src = item.src;
        mainImg.alt = item.alt;
        captionText.textContent = item.caption;
        mainImg.style.opacity = 1;
    }, 200);
}

function highlightThumb(activeThumb) {
    const allThumbs = document.querySelectorAll('.hist-thumb');
    allThumbs.forEach(t => t.classList.remove('active'));

    activeThumb.classList.add('active');
}

function initFooterDate() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initHistoryGallery();
    initFooterDate();
});