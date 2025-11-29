    const REVIEW_COUNT_KEY = 'pizzaSuggestionCount';

    function incrementAndDisplayCount() {
    // 1 Get current count from localStorage (defaults to 0 if not found)
        let currentCount = localStorage.getItem(REVIEW_COUNT_KEY);
        currentCount = currentCount ? parseInt(currentCount) : 0;
        
// 2. Increment the count++
        currentCount++;
        
// 3. Store the new count  into localStorage
        //localstorage.setItem(REVIEW_count_KEY, currentCount.toString());
        localStorage.setItem(REVIEW_COUNT_KEY, currentCount.toString());
        
        // 4. Display the updated count on the page
        const countElement = document.getElementById('suggestionCount');
        if (countElement) {
            countElement.textContent = currentCount;
        }
    }

    window.onload = function() {
        // Increment and display the counter
        incrementAndDisplayCount();
        
        // Set Last Modified Date
        document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString('en-US');
};