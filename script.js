/* ===================================
   HAM INTERNATIONAL TRANSPORT
   HOUSE B/L GENERATOR SCRIPT
=================================== */


// Create automatic House B/L number when page opens

window.onload = function () {

    let today = new Date();

    let year = today.getFullYear().toString().slice(-2);
    let month = String(today.getMonth()+1).padStart(2,'0');
    let day = String(today.getDate()).padStart(2,'0');

    let random = Math.floor(1000 + Math.random()*9000);


    document.getElementById("blNo").value =
        "HAM" + year + month + day + random;


    document.getElementById("date").value =
        today.toISOString().split("T")[0];

};





function generateBL(){


    // Get values from form


    document.getElementById("p_bl").innerHTML =
        document.getElementById("blNo").value;


    document.getElementById("p_date").innerHTML =
        document.getElementById("date").value;


    document.getElementById("p_shipper").innerHTML =
        document.getElementById("shipper").value.replace(/\n/g,"<br>");


    document.getElementById("p_consignee").innerHTML =
        document.getElementById("consignee").value.replace(/\n/g,"<br>");


    document.getElementById("p_notify").innerHTML =
        document.getElementById("notify").value.replace(/\n/g,"<br>");



    document.getElementById("p_vessel").innerHTML =
        document.getElementById("vessel").value
        + " / "
        + document.getElementById("voyage").value;



    document.getElementById("p_loading").innerHTML =
        document.getElementById("loading").value;



    document.getElementById("p_discharge").innerHTML =
        document.getElementById("discharge").value;



    document.getElementById("p_destination").innerHTML =
        document.getElementById("destination").value;



    document.getElementById("p_container").innerHTML =
        document.getElementById("container").value;



    document.getElementById("p_seal").innerHTML =
        document.getElementById("seal").value;



    document.getElementById("p_goods").innerHTML =
        document.getElementById("goods").value.replace(/\n/g,"<br>");



    document.getElementById("p_weight").innerHTML =
        document.getElementById("weight").value + " KG";



    document.getElementById("p_cbm").innerHTML =
        document.getElementById("cbm").value + " CBM";



    document.getElementById("p_freight").innerHTML =
        document.getElementById("freight").value;



    // Scroll to generated document

    document.getElementById("preview")
    .scrollIntoView({

        behavior:"smooth"

    });


}





function clearForm(){


    let inputs = document.querySelectorAll(
        "input, textarea"
    );


    inputs.forEach(function(input){

        input.value="";

    });



    document.getElementById("preview")
    .querySelectorAll("td:nth-child(2)")
    .forEach(function(cell){

        cell.innerHTML="";

    });


}
