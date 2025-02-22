// Search function for ID Number
function searchCustomer() {
    const idNumber = document.getElementById('id-number').value;

    if (idNumber) {
        alert(`Searching for customer with ID: ${idNumber}`);
        // Later: Connect this to a backend to retrieve customer data
    } else {
        alert("Please enter an ID Number.");
    }
}

// Navigate to the next page
function nextPage() {
    window.location.href = "firearm.html"; // Redirect to Page 3: Firearm Installations
}