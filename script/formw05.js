//provinces!

const provinces = [
    'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 
    'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 
    'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 
    'Misiones', 'Neuquén', 'Río Negro', 'Salta', 
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 
    'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
];

//Function to populate the select element  !
function loadProvinces() {
    const provinceSelect = document.getElementById('province');
    
    provinces.forEach(province => {
        let option = document.createElement('option');
        option.value = province; 
        option.textContent = province;
        provinceSelect.appendChild(option);
    });
}

// Seting last moodified Date and load provinces on page load
window.onload = function() {
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString('en-US');
    loadProvinces();
};
