// Example fitter names (from Page 11: Fitter Names)
const fitters = ["John Smith", "Jane Doe", "Mark Jones"];

// Populate Fitter combo box dynamically
window.addEventListener('DOMContentLoaded', () => {
    const fitterSelect = document.getElementById('fitter');
    fitters.forEach(fitter => {
        const option = document.createElement('option');
        option.value = fitter;
        option.textContent = fitter;
        fitterSelect.appendChild(option);
    });
});

// Ensure Pin No is in numeric order and non-repeating
const usedPinNumbers = []; // Array to track used pin numbers

document.getElementById('pin-no').addEventListener('change', function () {
    const pinNo = parseInt(this.value, 10);

    if (usedPinNumbers.includes(pinNo)) {
        alert("This Pin No has already been used. Please enter a unique value.");
        this.value = "";
    } else if (pinNo <= Math.max(0, ...usedPinNumbers)) {
        alert("Please enter the next numeric value in order.");
        this.value = "";
    } else {
        usedPinNumbers.push(pinNo);
    }
});

// Handling navigation
function prevPage() {
    window.location.href = "customer.html"; // Redirect to Page 2: Customer
}

function nextBatch() {
    alert("Loading the next 10 installations...");
    // Logic for handling multiple installation batches can be added here
}