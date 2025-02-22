// Example data - replace with actual data from your backend
const verificationData = [
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
const tableBody = document.querySelector("#verification-history-table tbody");

verificationData.forEach((item) => {
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
        <td><button onclick="generateJobCard(${item.pinNo})">Job Card</button></td>
    `;

    tableBody.appendChild(row);
});

function generateJobCard(pinNo) {
    alert(`Generating Job Card for Pin No: ${pinNo}`);
    // Replace with actual PDF generation logic
}

function printJobCards() {
    alert("Printing all job cards...");
    // Logic for batch printing
}