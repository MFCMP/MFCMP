const changeHistoryData = [
    {
        fitmentDate: "2023-03-10",
        customer: "John Doe",
        pinNo: 321,
        type: "Rifle",
        fabricate: "Model A",
        caliberCode: "5.56",
        serialNo: "123456789",
        fitter: "Mark Jones",
    },
];

const tableBody = document.querySelector("#change-history-table tbody");

changeHistoryData.forEach((item) => {
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

function generateCertificate(pinNo) {
    alert(`Generating Certificate for Pin No: ${pinNo}`);
    // Add document generation logic here
}

function generateJobCard(pinNo) {
    alert(`Generating Job Card for Pin No: ${pinNo}`);
    // Add document generation logic here
}

function printCertificates() {
    alert("Printing all certificates...");
}

function printJobCards() {
    alert("Printing all job cards...");
}