document.getElementById("add-row").addEventListener("click", function() {
    const tableBody = document.getElementById("table-body");

    // Create a new row
    const newRow = document.createElement("tr");

    // Add 10 columns to the row
    for (let i = 0; i < 10; i++) {
        const newCell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        newCell.appendChild(input);
        newRow.appendChild(newCell);
    }

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});
