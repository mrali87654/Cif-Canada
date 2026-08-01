// ===============================
// HAM HOUSE BILL OF LADING
// script.js
// ===============================

// Add a new vehicle row
function addRow() {

    const tbody = document.querySelector("#vehicleTable tbody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text" placeholder="Model & Year"></td>
        <td><input type="text" placeholder="VIN"></td>
        <td><input type="text" placeholder="Weight"></td>
        <td><input type="number" value="1" min="1"></td>
    `;

    tbody.appendChild(row);

}

// Clear all form fields
function clearForm() {

    if (!confirm("Clear all data?")) return;

    document.querySelectorAll("input").forEach(input => {

        if (input.type === "number")
            input.value = 1;
        else
            input.value = "";

    });

    document.querySelectorAll("textarea").forEach(area => {

        area.value = "";

    });

    // Keep only one vehicle row
    const tbody = document.querySelector("#vehicleTable tbody");

    while (tbody.rows.length > 1) {
        tbody.deleteRow(1);
    }

}

// Generate a random Booking Number
function generateBooking() {

    const booking =
        "EBKG" +
        Math.floor(10000000 + Math.random() * 90000000);

    document.getElementById("booking").value = booking;

}

// Generate a random Container Number
function generateContainer() {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let prefix = "";

    for (let i = 0; i < 4; i++) {

        prefix += letters.charAt(
            Math.floor(Math.random() * letters.length)
        );

    }

    const number =
        Math.floor(1000000 + Math.random() * 9000000);

    document.getElementById("container").value =
        prefix + number;

}

// Save data locally
function saveData() {

    const data = {

        booking: document.getElementById("booking").value,

        container: document.getElementById("container").value,

        seal: document.getElementById("seal").value,

        transshipment:
            document.getElementById("transshipment").value,

        exporter:
            document.getElementById("exporter").value,

        consignee:
            document.getElementById("consignee").value,

        notify:
            document.getElementById("notify").value,

        freight:
            document.getElementById("freight").value,

        hs:
            document.getElementById("hs").value,

        original:
            document.getElementById("original").value

    };

    localStorage.setItem(
        "HAM_BL",
        JSON.stringify(data)
    );

    alert("Saved.");

}

// Load previous data
function loadData() {

    const saved =
        localStorage.getItem("HAM_BL");

    if (!saved) return;

    const data = JSON.parse(saved);

    document.getElementById("booking").value =
        data.booking || "";

    document.getElementById("container").value =
        data.container || "";

    document.getElementById("seal").value =
        data.seal || "";

    document.getElementById("transshipment").value =
        data.transshipment || "";

    document.getElementById("exporter").value =
        data.exporter || "";

    document.getElementById("consignee").value =
        data.consignee || "";

    document.getElementById("notify").value =
        data.notify || "";

    document.getElementById("freight").value =
        data.freight || "";

    document.getElementById("hs").value =
        data.hs || "";

    document.getElementById("original").value =
        data.original || "";

}

// Initialize page
window.onload = function () {

    loadData();

    if (
        document.getElementById("booking").value === ""
    ) {
        generateBooking();
    }

    if (
        document.getElementById("container").value === ""
    ) {
        generateContainer();
    }

};

// Auto-save every 5 seconds
setInterval(saveData, 5000);
