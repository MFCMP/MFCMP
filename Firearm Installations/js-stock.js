const stockData = [
    { pinNo: 123, item: "Shotgun Barrel", used: false },
    { pinNo: 124, item: "Rifle Scope", used: true },
];

const tableBody = document.querySelector("#stock-table tbody");

stockData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.pinNo}</td>
        <td>${item.item}</td>
        <td>${item.used ? "<s>Used</s>" : "Available"}</td>
    `;
    tableBody.appendChild(row);
});

function uploadStock() {
    alert("Uploading new stock...");
    // Logic for stock upload goes here
}