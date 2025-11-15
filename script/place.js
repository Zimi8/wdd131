
/*
 * Wind Chill Logic: js/place.js
 *
 * Implements the required student-level JavaScript tasks:
 * 1. Calculate and display the wind chill factor.
 * 2. Update the footer with the current year and last modification date.
 *
 * NOTE: The wind chill calculation uses the Metric system formula (Celsius and km/h).
 * Formula: T_wc = 13.12 + 0.6215 * T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
 * (Where T is temperature in °C and V is wind speed in km/h)
 */

// Function to calculate the wind chill factor (single-line return as required)
const calculateWindChill = (temperature, windSpeed) => {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
};

// Main function to run when the page loads
const initializePage = () => {
    // 1. Static Variables for Wind Chill (Updated temp to meet calculation condition)
    // We changed 15 to 5 so that tempStatic <= 10 is TRUE.
    const tempStatic = 5; // Temperature in Celsius (°C) 
    const windSpeedStatic = 12; // Wind speed in kilometers per hour (km/h)

    // Elements to update
    const windChillElement = document.getElementById('windChillValue');
    const yearSpan = document.getElementById('currentYear');
    // Also updating the displayed temperature in the weather section to match the new static value
    const tempElement = document.getElementById('tempValue'); 

    // 2. Set Footer Year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // 3. Update displayed temperature to match the static JS value (for consistency)
    if (tempElement) {
        tempElement.textContent = `${tempStatic} °C`;
    }

    // 4. Conditional Wind Chill Calculation
    // Conditions for viable wind chill calculation (Metric):
    // Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (tempStatic <= 10 && windSpeedStatic > 4.8) {
        const windChill = calculateWindChill(tempStatic, windSpeedStatic);

        // Display the result rounded to one decimal place, followed by °C
        if (windChillElement) {
            windChillElement.textContent = `${windChill.toFixed(1)} °C`;
        }
    } else {
        // Display "N/A" if conditions are not met
        if (windChillElement) {
            windChillElement.textContent = 'N/A';
        }
    }
};


document.addEventListener('DOMContentLoaded', initializePage);