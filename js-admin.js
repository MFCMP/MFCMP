const adminData = [
    { username: "admin1", email: "admin1@example.com", centre: "Fitment Centre 1", resetRequested: "2023-03-01" },
];

const tableBody = document.querySelector("#admin-table tbody");

adminData.forEach((admin) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${admin.username}</td>
        <td>${admin.email}</td>
        <td>${admin.centre}</td>
        <td>******</td>
        <td>${admin.resetRequested}</td>
        <td>******</td>
    `;
    tableBody.appendChild(row);
});

function addUser() {
    alert("Adding a new user...");
}

function removeUser() {
    alert("Removing a user...");
}