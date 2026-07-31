function addVehicle(){

let table=document.querySelector("#vehicleTable tbody");

let row=table.insertRow();

row.innerHTML=`
<td><input></td>
<td><input></td>
<td><input></td>
<td><input value="1"></td>
`;

}

function generateBL(){

const { jsPDF }=window.jspdf;

let pdf=new jsPDF();

pdf.setFontSize(18);

pdf.text("HOUSE BILL OF LADING",20,20);

pdf.setFontSize(12);

pdf.text("Booking #: "+document.getElementById("booking").value,20,35);

pdf.text("Container #: "+document.getElementById("container").value,20,43);

pdf.text("Seal #: "+document.getElementById("seal").value,20,51);

pdf.text("Transshipment: "+document.getElementById("trans").value,20,59);

pdf.text("Exporter:",20,75);

pdf.text(document.getElementById("exporter").value,20,82);

pdf.text("Consignee:",110,75);

pdf.text(document.getElementById("consignee").value,110,82);

pdf.text("Notify:",20,120);

pdf.text(document.getElementById("notify").value,20,127);

let y=170;

pdf.text("MODEL & YEAR",10,y);

pdf.text("VIN NUMBER",80,y);

pdf.text("WEIGHT",150,y);

pdf.text("QTY",180,y);

y+=10;

document.querySelectorAll("#vehicleTable tbody tr").forEach(row=>{

let c=row.querySelectorAll("input");

pdf.text(c[0].value,10,y);

pdf.text(c[1].value,80,y);

pdf.text(c[2].value,150,y);

pdf.text(c[3].value,180,y);

y+=10;

});

pdf.save("House_BL.pdf");

}
