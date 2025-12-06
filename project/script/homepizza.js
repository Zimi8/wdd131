const galleryData = [
    {
        id: 1,
        src: "images/mezzeta.jpg",
        alt: "Traditional Argentine pizza with lots of cheese"
    },
    {
        id: 2,
        src: "images/fuga.jpg",
        alt: "Classic pizzeria interior"
    },
    {
        id: 3,
        src: "images/muza.jpg",
        alt: "Traditional clay oven"
    }
];


const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails-container');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');


function initGallery() {

    const lastViewedSrc = localStorage.getItem('lastViewedImage');
    const lastViewedAlt = localStorage.getItem('lastViewedAlt');

    if (lastViewedSrc && lastViewedAlt) {
        
        console.log(`Restoring last viewed image: ${lastViewedSrc}`);
        setMainImage(lastViewedSrc, lastViewedAlt);
    } else if (galleryData.length > 0) {
        setMainImage(galleryData[0].src, galleryData[0].alt);
    }


    galleryData.forEach(item => {
        const imgElement = document.createElement('img');
        

        imgElement.src = `${item.src}`;
        imgElement.alt = item.alt;
        imgElement.classList.add('thumb');
        

        imgElement.loading = "lazy";
        
 
        imgElement.addEventListener('click', () => {
            setMainImage(item.src, item.alt);
            

            document.querySelectorAll('.thumb').forEach(t => t.style.borderColor = 'var(--color-gold)');
            imgElement.style.borderColor = '#fff';
        });

        thumbnailsContainer.appendChild(imgElement);
    });
}


function setMainImage(src, alt) {

    localStorage.setItem('lastViewedImage', src);
    localStorage.setItem('lastViewedAlt', alt);


    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = src;
        mainImage.alt = alt;
        mainImage.style.opacity = 1;
    }, 200);
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Execute when DOM is ready
document.addEventListener('DOMContentLoaded', initGallery);