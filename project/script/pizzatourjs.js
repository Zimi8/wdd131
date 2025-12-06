const galleryData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
        alt: "Pizza tradicional argentina con mucho queso"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
        alt: "Interior de pizzería clásica"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1590947132387-155cc6dbf321?q=80&w=1000&auto=format&fit=crop",
        alt: "Horno de barro tradicional"
    }
];


const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails-container');


function initGallery() {

    if (galleryData.length > 0) {
        setMainImage(galleryData[0].src, galleryData[0].alt);
    }


    galleryData.forEach(item => {
        const imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.alt = item.alt;
        imgElement.classList.add('thumb');
        

        imgElement.addEventListener('click', () => {
            setMainImage(item.src, item.alt);
            

            document.querySelectorAll('.thumb').forEach(t => t.style.borderColor = 'var(--color-gold)');
            imgElement.style.borderColor = '#fff';
        });

        thumbnailsContainer.appendChild(imgElement);
    });
}


function setMainImage(src, alt) {

    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = src;
        mainImage.alt = alt;
        mainImage.style.opacity = 1;
    }, 200);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGallery);
