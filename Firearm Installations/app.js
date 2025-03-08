// Password Reset Function
function sendPasswordReset() {
    const resetEmail = document.getElementById('reset-email').value;

    if (resetEmail) {
        // Simulate sending an email request to admin@mfcmp.co.za
        alert(`Password reset request sent for: ${resetEmail}\nCheck admin@mfcmp.co.za for details.`);
        // In a real backend:
        // Send email to admin@mfcmp.co.za with the reset request details
    } else {
        alert("Please enter an email address.");
    }
}

// Registration Request Function
function sendRegistrationRequest() {
    const username = document.getElementById('reg-username').value;
    const company = document.getElementById('reg-company').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (username && company && email && password) {
        // Simulate sending an email request to admin@mfcmp.co.za
        alert(`Registration request sent for:\nUsername: ${username}\nCompany: ${company}\nEmail: ${email}`);
        // In a real backend:
        // Send email to admin@mfcmp.co.za with the registration details
    } else {
        alert("Please complete all fields.");
    }
}