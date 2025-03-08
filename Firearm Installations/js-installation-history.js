// Example data - replace with actual data from your backend
const installationData = [
    {
        fitmentDate: "2023-03-07",
        customer: "John Doe",
        pinNo: 123,
        type: "Shotgun",
        fabricate: "Model X",
        caliberCode: "12",
        serialNo: "987654",
        fitter: "Jane Doe",
    },
    {
        fitmentDate: "2023-03-08",
        customer: "Alice Smith",
        pinNo: 124,
        type: "Rifle",
        fabricate: "Model Y",
        caliberCode: "7.62",
        serialNo: "123456",
        fitter: "John Smith",
    },
];

// Populate table dynamically
const tableBody = document.querySelector("#installation-history-table tbody");

installationData.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.fitmentDate}</td>
        <td>${item.customer}</td>
        <td>${item.pinNo}</td>
        <td>${item.type}</td>
        <td>${item.fabricate}</td>
        <td>${item.caliberCode}</td>
        <td>${item.serialNo}</td>
        <td>${item.fitter}</td>
        <td><button onclick="generateCertificate(${item.pinNo})">Certificate</button></td>
        <td><button onclick="generateJobCard(${item.pinNo})">Job Card</button></td>
    `;

    tableBody.appendChild(row);
});

// Generate and print certificates
function generateCertificate(pinNo) {
    alert(`Generating Certificate for Pin No: ${pinNo}`);
    // Later: Replace with PDF generation logic using libraries like jsPDF
}

function generateJobCard(pinNo) {
    alert(`Generating Job Card for Pin No: ${pinNo}`);
    // Later: Replace with PDF generation logic using libraries like jsPDF
}

function printCertificates() {
    alert("Printing all certificates...");
    // Logic for batch printing certificates
}

function printJobCards() {
    alert("Printing all job cards...");
    // Logic for batch printing job cards
}