document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("table-body");
    const addRowButton = document.getElementById("add-row");

    // Load the saved data from localStorage when the page loads
    loadTableData();

    // Add a new row to the table when the "Add Row" button is clicked
    addRowButton.addEventListener("click", function() {
        addRow();
        saveTableData();
    });

    // Function to create a new row with editable cells
    function addRow() {
        const newRow = document.createElement("tr");

        for (let i = 0; i < 10; i++) {
            const newCell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "text";
            newCell.appendChild(input);
            newRow.appendChild(newCell);
        }

        tableBody.appendChild(newRow);
    }

    // Function to save the current table data into localStorage
    function saveTableData() {
        const rows = tableBody.getElementsByTagName("tr");
        const tableData = [];

        for (let row of rows) {
            const rowData = [];
            const cells = row.getElementsByTagName("td");

            for (let cell of cells) {
                const input = cell.querySelector("input");
                rowData.push(input ? input.value : "");
            }

            tableData.push(rowData);
        }

        // Save the data as a JSON string in localStorage
        localStorage.setItem("tableData", JSON.stringify(tableData));
    }

    // Function to load the table data from localStorage
    function loadTableData() {
        const savedData = localStorage.getItem("tableData");

        if (savedData) {
            const tableData = JSON.parse(savedData);

            for (let rowData of tableData) {
                const newRow = document.createElement("tr");

                for (let data of rowData) {
                    const newCell = document.createElement("td");
                    const input = document.createElement("input");
                    input.type = "text";
                    input.value = data;
                    newCell.appendChild(input);
                    newRow.appendChild(newCell);
                }

                tableBody.appendChild(newRow);
            }
        }
    }

    // Ensure that the table data is saved whenever there is a change
    tableBody.addEventListener("input", saveTableData);
});
