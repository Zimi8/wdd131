/// TEMPLE DATA ARRAY ---
// Data collected for the temples you specified, matching the required properties.
const temples = [
    {
      templeName: "Buenos Aires Argentina Temple",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 30040,
      imageUrl: "images/imagesTemple/arg.jpg"
    },
    {
      templeName: "Mesa Arizona Temple",
      location: "Mesa, Arizona, United States",
      dedicated: "1927, October, 23",
      area: 120061,
      imageUrl: "images/imagesTemple/mesa.jpg"
    },
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41968,
      imageUrl: "images/imagesTemple/rome.jpg"
    },
    {
      templeName: "Brisbane Australia Temple",
      location: "Brisbane, Queensland, Australia",
      dedicated: "2003, June, 15",
      area: 10700,
      imageUrl: "images/imagesTemple/brisbane.jpg"
    },
    {
      templeName: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 53997,
      imageUrl: "images/imagesTemple/tokyo.jpg"
    },
    {
      templeName: "Asunción Paraguay Temple",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 19",
      area: 11906,
      imageUrl: "images/imagesTemple/asuncion.jpg"
    },
    {
      templeName: "Santiago Chile Temple",
      location: "Santiago, Chile",
      dedicated: "1983, April, 29",
      area: 17384,
      imageUrl: "images/imagesTemple/chile.jpg"
    },
    {
      templeName: "London England Temple",
      location: "Newchapel, Surrey, England",
      dedicated: "1958, September, 7",
      area: 42776,
      imageUrl: "images/imagesTemple/london.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl: "images/imagesTemple/saltlakeesa.jpg"
    },

    {
      templeName: "Sapporo Japan Temple",
      location: "Sapporo, Japan",
      dedicated: "2016, August, 21",
      area: 48480,
      imageUrl: "sapporo"
    }
  ];

const gallery = document.querySelector('.album-grid');
const heading = document.getElementById('gallery-heading');


//card temples figures HERE ? I need to chech if matters

 
function createTempleCard(temple) {

    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    let h3 = document.createElement('h3');
    let pLocation = document.createElement('p');
    let pDedicated = document.createElement('p');
    let pArea = document.createElement('p');

 // LAZY LOAD
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy'); 
    img.setAttribute('width', '400');
    img.setAttribute('height', '250');


    h3.textContent = temple.templeName;
    pLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    pDedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    pArea.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`; // Format area


    figcaption.appendChild(h3);
    figcaption.appendChild(pLocation);
    figcaption.appendChild(pDedicated);
    figcaption.appendChild(pArea);

    figure.appendChild(img);
    figure.appendChild(figcaption);


    gallery.appendChild(figure);
}


function displayTemples(filteredTemples, title) {
//current dates!!!
    gallery.innerHTML = '';
    heading.textContent = title;

// / Checking if there are temples to display
    if (filteredTemples.length === 0) {
        gallery.innerHTML = '<p class="no-results">No temples match this filter criteria.</p>';
        return;
    }


    filteredTemples.forEach(createTempleCard);
}


/* NAV LOGIC HERE */
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelector('.nav-links');

    navLinks.addEventListener('click', (event) => {
        // Only process clicks on <a> tags
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default link behavior
            const filterId = event.target.id;
            let filteredList = [];
            let galleryTitle = "A Collection of Sacred Temples.";

            navLinks.querySelectorAll('a').forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');


            switch (filterId) {

                // Old – temples built before 1900
                case 'old-link': 
                    filteredList = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0].trim());
                        return year < 1900;
                    });
                    galleryTitle = "Old Temples (Dedicated Before 1900)";
                    break;
// New – temples built after 2000
                case 'new-link': 
                    filteredList = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0].trim());
                        return year > 2000;
                    });
                    galleryTitle = "New Temples (Dedicated After 2000)";
                    break;
// Large – temples larger than 90,000 square feet
                case 'large-link': 
                    filteredList = temples.filter(temple => temple.area > 90000);
                    galleryTitle = "Large Temples (> 90,000 sq ft)";
                    break;
                    // Small – temples smaller than 10,000 square feet
                case 'small-link': 
                    filteredList = temples.filter(temple => temple.area < 10000);
                    galleryTitle = "Small Temples (< 10,000 sq ft)";
                    break;
                    // Home – displays all the temples

                case 'home-link': 
                default:
                    filteredList = temples;
                    galleryTitle = "A Collection of Sacred Temples.";
                    break;
            }

            displayTemples(filteredList, galleryTitle);
            
            // Close mobile menu after selection
            if (navLinks.classList.contains('show')) {
                 const menuButton = document.querySelector('.menu-icon');
                 navLinks.classList.remove('show');
                 menuButton.textContent = '☰';
                 menuButton.setAttribute('aria-label', 'Menu');
             }
        }
    });

    // --- 3. INITIAL LOAD ---
    // Display all temples on initial load
    displayTemples(temples, "A Collection of Sacred Temples.");
    // Set 'Home' link as active on load
    document.getElementById('home-link').classList.add('active');


    // --- 4. MOBILE MENU TOGGLE (Copied from original temples.js) ---
    const menuButton = document.querySelector('.menu-icon');
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        if (navLinks.classList.contains('show')) {
            menuButton.textContent = '✕'; 
            menuButton.setAttribute('aria-label', 'Close Menu');
        } else {
            menuButton.textContent = '☰'; 
            menuButton.setAttribute('aria-label', 'Menu');
        }
    });
    
/// 5 FOOTER DYNAMIC DATES 

    document.getElementById("currentyear").textContent = new Date().getFullYear();


    document.getElementById("lastModified").textContent = document.lastModified;
});