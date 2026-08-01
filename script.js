// =======================================
// HOUSE B/L GENERATOR SCRIPT
// =======================================


// Generate House B/L Preview

function generateBL() {

    let blNumber = document.getElementById("blNumber").value;
    let date = document.getElementById("date").value;

    let shipper = document.getElementById("shipper").value;
    let consignee = document.getElementById("consignee").value;

    let vehicle = document.getElementById("vehicle").value;
    let vin = document.getElementById("vin").value;
    let weight = document.getElementById("weight").value;

    let origin = document.getElementById("origin").value;
    let destination = document.getElementById("destination").value;


    let preview = `

    <div class="bl-header">

        <div>
            <img class="logo" src="logo.png">
        </div>


        <div class="company-info">

            <h2>HAM INTERNATIONAL TRANSPORT</h2>

            74 Mnt de St Sulpice<br>
            Saint-Sulpice, QC J5W 0H2<br>
            Canada<br>
            Documentation@hamintltransport.com<br>
            +1 (000) 000-0000

        </div>

    </div>


    <div class="bl-title">
        HOUSE BILL OF LADING
    </div>


    <div class="row">

        <div class="col box">

            <div class="box-title">
                B/L NUMBER
            </div>

            ${blNumber}

        </div>


        <div class="col box">

            <div class="box-title">
                DATE
            </div>

            ${date}

        </div>


    </div>



    <div class="row">


        <div class="col box">

            <div class="box-title">
                SHIPPER
            </div>

            ${shipper}

        </div>



        <div class="col box">

            <div class="box-title">
                CONSIGNEE
            </div>

            ${consignee}

        </div>


    </div>



    <div class="box">

        <div class="box-title">
            ROUTE
        </div>

        From : ${origin}
        <br>
        To : ${destination}

    </div>




    <div class="box">

        <div class="box-title">
            CARGO DETAILS
        </div>



        <table>

            <tr>

                <th>Description</th>
                <th>VIN</th>
                <th>Weight (KG)</th>

            </tr>


            <tr>

                <td>${vehicle}</td>
                <td>${vin}</td>
                <td>${weight}</td>

            </tr>


        </table>


    </div>




    <div class="signature">


        <div class="sign-box">

            Shipper Signature

        </div>



        <div class="sign-box">

            Carrier Signature

        </div>


    </div>




    <div class="footer">

        Issued by HAM INTERNATIONAL TRANSPORT

    </div>



    `;



    document.getElementById("preview").innerHTML = preview;

}



// =======================================
// EXPORT PDF
// =======================================


function downloadPDF(){


    let element = document.getElementById("preview");


    let options = {

        margin: 10,

        filename: "House_BL.pdf",

        image: {
            type:'jpeg',
            quality:0.98
        },


        html2canvas: {
            scale:2
        },


        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation:'portrait'
        }

    };



    html2pdf()

    .set(options)

    .from(element)

    .save();



}
