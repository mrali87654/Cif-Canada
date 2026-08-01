// =====================================
// HAM HOUSE B/L GENERATOR
// SCRIPT.JS
// =====================================


// Add vehicle row

function addVehicle(){

    let table = document.getElementById("vehicleInput");


    let row = table.insertRow();


    row.innerHTML = `

    <td>
        <input class="model">
    </td>

    <td>
        <input class="vin">
    </td>

    <td>
        <input class="weight">
    </td>

    <td>
        <input class="qty" value="1">
    </td>

    `;

}



// Generate PDF

function generatePDF(){


    let booking = document.getElementById("booking").value;
    let container = document.getElementById("container").value;
    let seal = document.getElementById("seal").value;
    let transshipment = document.getElementById("transshipment").value;


    let exporter = document.getElementById("exporter").value;
    let consignee = document.getElementById("consignee").value;
    let notify = document.getElementById("notify").value;


    let freight = document.getElementById("freight").value;
    let hs = document.getElementById("hs").value;
    let original = document.getElementById("original").value;



    let vehicles = document.querySelectorAll("#vehicleInput tr");

    let cargo = "";



    for(let i=1;i<vehicles.length;i++){


        let model = vehicles[i].querySelector(".model").value;
        let vin = vehicles[i].querySelector(".vin").value;
        let weight = vehicles[i].querySelector(".weight").value;
        let qty = vehicles[i].querySelector(".qty").value;


        cargo += `

        <tr>

        <td>${model}</td>
        <td>${vin}</td>
        <td>${weight}</td>
        <td>${qty}</td>

        </tr>

        `;


    }



    let preview = document.getElementById("preview");


    preview.innerHTML = `


<div class="bl">


<div class="bl-header">


<div>

<img src="logo.png" class="logo">

</div>


<div class="company-info">


<h2>
HAM INTERNATIONAL TRANSPORT
</h2>


74 Mnt de St Sulpice<br>
Saint-Sulpice, QC J5W 0H2<br>
Canada<br>

Documentation@hamintltransport.com<br>

+1 (000) 000-0000


</div>


</div>




<h1 class="title">

HOUSE BILL OF LADING

</h1>





<div class="two-column">


<div class="box">

<h3>
SHIPMENT INFORMATION
</h3>


Booking #: ${booking}<br>

Container #: ${container}<br>

Seal #: ${seal}<br>

Transshipment: ${transshipment}


</div>





<div class="box">

<h3>
CARGO INFORMATION
</h3>


Freight: ${freight}<br>

HS Code: ${hs}<br>

Original No: ${original}


</div>



</div>





<div class="two-column">


<div class="box">

<h3>
EXPORTER
</h3>


${exporter.replace(/\n/g,"<br>")}


</div>



<div class="box">


<h3>
CONSIGNEE
</h3>


${consignee.replace(/\n/g,"<br>")}


</div>


</div>






<div class="box">


<h3>
NOTIFY PARTY
</h3>


${notify.replace(/\n/g,"<br>")}



</div>






<div class="box">


<h3>
VEHICLE DETAILS
</h3>


<table>


<tr>

<th>MODEL & YEAR</th>
<th>VIN</th>
<th>WEIGHT KG</th>
<th>QTY</th>

</tr>


${cargo}


</table>


</div>






<div class="signature">


<div>
_____________________<br>
SHIPPER SIGNATURE
</div>


<div>
_____________________<br>
CARRIER SIGNATURE
</div>


</div>





<p class="footer">

Issued by HAM INTERNATIONAL TRANSPORT

</p>




</div>



`;





// Export PDF automatically


let options = {


margin:10,

filename:"HOUSE_BL.pdf",


image:{
type:"jpeg",
quality:0.98
},


html2canvas:{
scale:2
},


jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
}


};



html2pdf()

.set(options)

.from(preview)

.save();



}
