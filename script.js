document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("table-body");
    const addRowButton = document.getElementById("add-row");
    const ectnHeader = document.getElementById("ectn-header");

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

        // Client Name (First column)
        const clientNameCell = document.createElement("td");
        const clientNameInput = document.createElement("input");
        clientNameInput.type = "text";
        clientNameCell.appendChild(clientNameInput);
        newRow.appendChild(clientNameCell);

        // Booking Number (Second column)
        const bookingNumberCell = document.createElement("td");
        const bookingNumberInput = document.createElement("input");
        bookingNumberInput.type = "text";
        bookingNumberCell.appendChild(bookingNumberInput);
        newRow.appendChild(bookingNumberCell);

        // Send Photos (Third column with checkbox)
        const sendPhotosCell = document.createElement("td");
        const sendPhotosCheckbox = document.createElement("input");
        sendPhotosCheckbox.type = "checkbox";
        sendPhotosCell.appendChild(sendPhotosCheckbox);
        newRow.appendChild(sendPhotosCell);

        // Destination (Fourth column)
        const destinationCell = document.createElement("td");
        const destinationInput = document.createElement("input");
        destinationInput.type = "text";
        destinationInput.addEventListener("input", function() {
            toggleECTNColumn(destinationInput.value); // Show/Hide ECTN based on Destination input
        });
        destinationCell.appendChild(destinationInput);
        newRow.appendChild(destinationCell);

        // Number of Cars (Fifth column)
        const numberOfCarsCell = document.createElement("td");
        const numberOfCarsInput = document.createElement("input");
        numberOfCarsInput.type = "number";
        numberOfCarsCell.appendChild(numberOfCarsInput);
        newRow.appendChild(numberOfCarsCell);

        // ECTN (Sixth column, initially hidden)
        const ectnCell = document.createElement("td");
        const ectnInput = document.createElement("input");
        ectnInput.type = "text";
        ectnCell.appendChild(ectnInput);
        newRow.appendChild(ectnCell);

        // Append the new row to the table body
        tableBody.appendChild(newRow);
    }

    // Toggle the ECTN column visibility based on Destination input
    function toggleECTNColumn(destination) {
        if (destination && destination.trim() !== "") {
            ectnHeader.style.display = "table-cell"; // Show ECTN column
        } else {
            ectnHeader.style.display = "none"; // Hide ECTN column
        }

        // Update the visibility for the ECTN cell in each row
        const rows = tableBody.getElementsByTagName("tr");
        for (let row of rows) {
            const ectnCell = row.cells[5]; // The ECTN column (index 5)
            if (destination && destination.trim() !== "") {
                ectnCell.style.display = "table-cell";
            } else {
                ectnCell.style.display = "none";
            }
        }
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
                if (input) {
                    rowData.push(input.type === "checkbox" ? input.checked : input.value);
                }
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

                // Client Name
                const clientNameCell = document.createElement("td");
                const clientNameInput = document.createElement("input");
                clientNameInput.type = "text";
                clientNameInput.value = rowData[0];
                clientNameCell.appendChild(clientNameInput);
                newRow.appendChild(clientNameCell);

                // Booking Number
                const bookingNumberCell = document.createElement("td");
                const bookingNumberInput = document.createElement("input");
                bookingNumberInput.type = "text";
                bookingNumberInput.value = rowData[1];
                bookingNumberCell.appendChild(bookingNumberInput);
                newRow.appendChild(bookingNumberCell);

                // Send Photos (Checkbox)
                const sendPhotosCell = document.createElement("td");
                const sendPhotosCheckbox = document.createElement("input");
                sendPhotosCheckbox.type = "checkbox";
                sendPhotosCheckbox.checked = rowData[2];
                sendPhotosCell.appendChild(sendPhotosCheckbox);
                newRow.appendChild(sendPhotosCell);

                // Destination
                const destinationCell = document.createElement("td");
                const destinationInput = document.createElement("input");
                destinationInput.type = "text";
                destinationInput.value = rowData[3];
                destinationInput.addEventListener("input", function() {
                    toggleECTNColumn(destinationInput.value);
                });
                destinationCell.appendChild(destinationInput);
                newRow.appendChild(destinationCell);

                // Number of Cars
                const numberOfCarsCell = document.createElement("td");
                const numberOfCarsInput = document.createElement("input");
                numberOfCarsInput.type = "number";
                numberOfCarsInput.value = rowData[4];
                numberOfCarsCell.appendChild(numberOfCarsInput);
                newRow.appendChild(numberOfCarsCell);

                // ECTN (Initially hidden, populated from saved data)
                const ectnCell = document.createElement("td");
                const ectnInput = document.createElement("input");
                ectnInput.type = "text";
                ectnInput.value = rowData[5];
                ectnCell.appendChild(ectnInput);
                newRow.appendChild(ectnCell);

                // Append the row
                tableBody.appendChild(newRow);

                // Trigger the ECTN column visibility based on destination
                toggleECTNColumn(rowData[3]);
            }
        }
    }

    // Ensure the table data is saved whenever there is a change
    tableBody.addEventListener("input", saveTableData);
});
