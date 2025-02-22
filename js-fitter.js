const fitterData = [
    { name: "Jane Doe", idNo: "1234567890", company: "Company A", date: "2023-03-01" },
];

const tableBody = document.querySelector("#fitter-table tbody");

fitterData.forEach((fitter) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${fitter.name}</td>
        <td>${fitter.idNo}</td>
        <td>${fitter.company}</td>
        <td>Handgun: Yes, Shotgun: No</td>
        <td>${fitter.date}</td>
    `;
    tableBody.appendChild(row);
});

function addFitter() {
    alert("Adding a new fitter...");
}

function editFitter() {
    alert("Editing fitter details...");
}